"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";
import { ShoppingCart } from "lucide-react";
import { useSearch } from "../Context/SearchContext";

type User = {
  name: string;
  email: string;
};


export default function Navbar() {
  const router = useRouter();
  const { totalItems } = useCart();

  const [user, setUser] = useState<User | null>(null);

  const { setSearchTerm } = useSearch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
      >
        BLOOM<span>SHOP</span>
      </div>

      <ul className="nav-links">
        <li>Contact</li>
      </ul>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearchTerm  && setSearchTerm  (e.target.value)}
        />
      </div>

      <div className="nav-buttons">
        {/* Cart Icon */}
        <div
          className="cart-icon-wrapper"
          onClick={() => router.push("/cart")}
        >
          <ShoppingCart size={26} />

          {totalItems > 0 && (
            <span className="cart-badge">
              {totalItems}
            </span>
          )}
        </div>

        {user ? (
          <>
            <span className="welcome-user">
              Welcome {user.name}
            </span>

            <button
              className="signup-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className="signin-btn"
              onClick={() => router.push("/login")}
            >
              Login
            </button>

            <button
              className="signup-btn"
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}