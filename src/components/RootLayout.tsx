// import Navbar from "./Navbar";

// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//   return (<>
//   <Navbar
//     />
//     {children}
//   </>)}
//   export default RootLayout;


"use client";

import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

type RootLayoutProps = {
  children: React.ReactNode;
  setSearchTerm?: (value: string) => void;
};

export default function RootLayout({
  children,
  setSearchTerm,
}: RootLayoutProps) {
  const pathname = usePathname();

  // hide navbar on login/signup
  const hideNavbar =
    pathname === "/login" || pathname === "/signup";

  return (
    <>
      {!hideNavbar && (
        <Navbar setSearchTerm={setSearchTerm} />
      )}
      {children}
    </>
  );
}