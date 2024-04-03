import ShopPage from "./pages/ShopPage";
import "./App.css";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import BlogDetailsPage from "./pages/BlogDetails";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import ContactPage from "./components/Contact/Contact";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/auth" element={<AuthPage />}></Route>
      <Route path="/product/:id" element={<ProductDetailsPage />}></Route>
      <Route path="/blog/:id" element={<BlogDetailsPage />}></Route>
    </Routes>
  );
}

export default App;
