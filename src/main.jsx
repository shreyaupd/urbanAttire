import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductProvider from "./Contexts/ProductContext.jsx";
import SidebarProvider from "./Contexts/SidebarContext.jsx";
import CardProvider from "./Contexts/CardContext.jsx";
createRoot(document.getElementById("root")).render(

    <SidebarProvider>
      <CardProvider>
        <ProductProvider>
        <StrictMode>
          <App />
          </StrictMode>
        </ProductProvider>
      </CardProvider>
    </SidebarProvider>

);
