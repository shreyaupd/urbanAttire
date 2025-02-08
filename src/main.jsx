import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductProvider from "./Contexts/ProductContext.jsx";
import SidebarProvider from "./Contexts/SidebarContext.jsx";
import CartProvider from "./Contexts/CartContext.jsx";
createRoot(document.getElementById("root")).render(

    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
        <StrictMode>
          <App />
          </StrictMode>
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>

);
