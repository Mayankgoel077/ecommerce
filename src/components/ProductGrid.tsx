//commenting the code which i wrote myself before and pasting from ai wala here


// import ProductCard from "./ProductCard"


// const products = [
//     {
//     image: "/s1.png",
//     title: "AirFlex Runner",
//     price: "$89.00",
//   },
//   {
//     image: "/s2.png",
//     title: "Urban Street Pro",
//     price: "$99.00",
//   },
//   {
//     image: "/s3.png",
//     title: "Classic Court 90s",
//     price: "$80.00",
//   },
//   {
//     image: "/s4.png",
//     title: "Volt Edge",
//     price: "$119.00",
//   }
// ];

// export default function ProductGrid() {
//   return (
//     <section className="products">
//       {products.map((product, index) => (
//         <ProductCard
//           key={index}
//           image={product.image}
//           title={product.title}
//           price={product.price}
//         /> 
//       ))}
//     </section>
//   );

// }

// import ProductCard from "./ProductCard";

// const products = [
//   {
//     id: 1,
//     image: "/s1.png",
//     title: "AirFlex Runner",
//     price: 89,
//   },
//   {
//     id: 2,
//     image: "/s2.png",
//     title: "Urban Street Pro",
//     price: 99,
//   },
//   {
//     id: 3,
//     image: "/s3.png",
//     title: "Classic Court 90s",
//     price: 80,
//   },
//   {
//     id: 4,
//     image: "/s4.png",
//     title: "Volt Edge",
//     price: 119,
//   }
// ];

// type ProductGridProps = {
//   searchTerm: string;
// };

// export default function ProductGrid() {

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(
//       searchTerm.toLowerCase()
//     )
//   );

//   return (
//     <section className="products">
//       {filteredProducts.length > 0 ? (
//         filteredProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             id={product.id}
//             image={product.image}
//             title={product.title}
//             price={product.price}
//           />
//         ))
//       ) : (
//         <h2 style={{ textAlign: "center", width: "100%" }}>
//           No products found 😢
//         </h2>
//       )}
//     </section>
//   );
// }


"use client";

import ProductCard from "./ProductCard";
import { useSearch } from "../Context/SearchContext";

const products = [
  {
    id: 1,
    image: "/s1.png",
    title: "AirFlex Runner",
    price: 89,
  },
  {
    id: 2,
    image: "/s2.png",
    title: "Urban Street Pro",
    price: 99,
  },
  {
    id: 3,
    image: "/s3.png",
    title: "Classic Court 90s",
    price: 80,
  },
  {
    id: 4,
    image: "/s4.png",
    title: "Volt Edge",
    price: 119,
  }
];

export default function ProductGrid() {
  const { searchTerm } = useSearch();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(
      searchTerm.toLowerCase()
    )
  );

  return (
    <section className="products">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))
      ) : (
        <h2 style={{ textAlign: "center", width: "100%" }}>
          No products found 😢
        </h2>
      )}
    </section>
  );
}