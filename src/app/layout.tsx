

// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import { CartProvider } from "../Context/CartContext";
// import { usePathname } from "next/navigation";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   // Navbar hide on login and signup
//   const hideNavbar =
//     pathname === "/login" || pathname === "/signup";



//   return (
//     <html lang="en">
//       <body>
//         <CartProvider>
//           <RootLayout>
//            {children}
//           </RootLayout>
//         </CartProvider>
//       </body>
//     </html>
//   );
// }

// second attempt

// import "./globals.css";
// import { CartProvider } from "../Context/CartContext";
// import RootLayoutWrapper from "@/components/RootLayout";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <CartProvider>
//           <RootLayoutWrapper>
//             {children}
//           </RootLayoutWrapper>
//         </CartProvider>
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import { CartProvider } from "../Context/CartContext";
import { SearchProvider } from "../Context/SearchContext";
import RootLayoutWrapper from "@/components/RootLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SearchProvider>
            <RootLayoutWrapper>
              {children}
            </RootLayoutWrapper>
          </SearchProvider>
        </CartProvider>
      </body>
    </html>
  );
}