import ProductCard from "./ProductCard"


const products = [
    {
    image: "/s1.png",
    title: "AirFlex Runner",
    price: "$89.00",
  },
  {
    image: "/s2.png",
    title: "Urban Street Pro",
    price: "$99.00",
  },
  {
    image: "/s3.png",
    title: "Classic Court 90s",
    price: "$80.00",
  },
  {
    image: "/s4.png",
    title: "Volt Edge",
    price: "$119.00",
  }
];

export default function ProductGrid() {
  return (
    <section className="products">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
        /> 
      ))}
    </section>
  );

}