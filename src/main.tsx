import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CartProvider } from './contexts/CartContext.tsx'

console.log("Starting app render...");

try {
  createRoot(document.getElementById("root")!).render(
    <CartProvider>
      <App />
    </CartProvider>
  );
  console.log("App rendered successfully");
} catch (error) {
  console.error("Error rendering app:", error);
}
