import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Loader2, LogOut } from "lucide-react";

interface Product {
  id: string;
  title: string;
  description: string | null;
  price: string | null;
  image_path: string | null;
  in_stock: boolean;
}

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [updating, setUpdating] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAdminStatus();
  }, []);

  const checkAdminStatus = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .single();

    if (!roles) {
      toast({
        title: "Access Denied",
        description: "You don't have admin privileges.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    setIsAdmin(true);
    fetchProducts();
  };

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("title");

    if (error) {
      toast({
        title: "Error",
        description: "Failed to load products",
        variant: "destructive",
      });
    } else {
      setProducts(data || []);
    }
    setLoading(false);
  };

  const toggleStock = async (productId: string, currentStock: boolean) => {
    setUpdating(productId);
    
    const { error } = await supabase
      .from("products")
      .update({ in_stock: !currentStock })
      .eq("id", productId);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update stock status",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: `Product marked as ${!currentStock ? "in stock" : "out of stock"}`,
      });
      fetchProducts();
    }
    
    setUpdating(null);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <Loader2 className="h-8 w-8 animate-spin text-warm-brown" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-cream py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-serif font-bold text-warm-brown mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">Manage product stock status</p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <div className="space-y-4">
          {products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-warm-brown">
                  {product.title}
                </CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id={`stock-${product.id}`}
                      checked={product.in_stock}
                      onCheckedChange={() => toggleStock(product.id, product.in_stock)}
                      disabled={updating === product.id}
                    />
                    <Label htmlFor={`stock-${product.id}`} className="cursor-pointer">
                      {product.in_stock ? "In Stock" : "Out of Stock"}
                    </Label>
                  </div>
                  <span className="text-bronze font-semibold">{product.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Button variant="outline" onClick={() => navigate("/")} className="w-full">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
