"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";
import { useState } from "react";



  



export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      {/* <Navbar  setSearchTerm={setSearchTerm}/> */}
      <Hero />
      <ProductGrid searchTerm={searchTerm} />
      
    </>
  );
}