import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import ProductGrid from "./components/ProductGrid";
import "./components/ecommerce.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductGrid/>
      
    </>
  );
}