// "use client";

// import { useCart } from "../../Context/CartContext";
// import {
//   Trash2,
//   Shield,
//   Truck,
//   Heart,
//   CreditCard,
//   ArrowLeft,
// } from "lucide-react";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function CartPage() {
//   const {
//     cart,
//     increaseQuantity,
//     decreaseQuantity,
//     removeFromCart,
//     isLoaded,
//   } = useCart();

//   // Hydration fix
//   const [mounted, setMounted] = useState(true);


//   // Prevent broken first render
//   if (!mounted || !isLoaded) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <p className="text-lg text-gray-500">Loading cart...</p>
//       </div>
//     );
//   }

//   const subtotal = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   const shipping = subtotal > 100 ? 0 : 10;
//   const tax = +(subtotal * 0.08).toFixed(2);
//   const total = subtotal + shipping + tax;

//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

//   if (cart.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100 border">
//         <div className="bg-white p-12 rounded-3xl shadow-lg text-center">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             Your cart is empty 🛒
//           </h1>
//           <p className="text-lg text-gray-500">
//             Add some products and they’ll appear here.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 px-8 lg:px-16 py-10">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-3xl font-semibold text-gray-900">
//             Shopping Cart
//           </h1>
//           <p className="text-gray-500 text-base mt-1">
//             {totalItems} items in your cart
//           </p>
//         </div>

//         <Link
//           href="/"
//           className="flex items-center gap-2 text-gray-500 hover:text-black"
//         >
//           <ArrowLeft size={18} />
//           Continue Shopping
//         </Link>
//       </div>

//       {/* Main Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
//         {/* LEFT - CART ITEMS */}
//         <div className="lg:col-span-3 bg-white rounded-3xl shadow-md p-8">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-2xl font-semibold">Cart Items</h2>

//             <button className="text-gray-500 hover:text-red-500">
//               Clear All
//             </button>
//           </div>

//           <div className="space-y-8">
//             {cart.map((item, index) => (
//               <div key={item.id}>
//                 <div className="flex items-center gap-6">
//                   {/* Product Image */}
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-28 h-28 object-cover rounded-2xl"
//                   />

//                   {/* Product Details */}
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold text-gray-900">
//                       {item.title}
//                     </h3>

//                     <p className="text-gray-500 text-base mb-3">
//                       ${item.price}.00 each
//                     </p>

//                     {/* Quantity */}
//                     <div className="flex items-center gap-3 border rounded-full px-4 py-2 w-fit">
//                       <button
//                         onClick={() => decreaseQuantity(item.id)}
//                         className="text-3xl text-gray-500 hover:text-black"
//                       >
//                         -
//                       </button>

//                       <span className="text-xl font-semibold min-w-[30px] text-center">
//                         {item.quantity}
//                       </span>

//                       <button
//                         onClick={() => increaseQuantity(item.id)}
//                         className="text-3xl text-gray-500 hover:text-black"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>

//                   {/* Right Side */}
//                   <div className="flex flex-col items-end gap-6">
//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       className="text-gray-400 hover:text-red-500"
//                     >
//                       <Trash2 size={22} />
//                     </button>

//                     <p className="text-2xl font-semibold text-gray-900">
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Divider */}
//                 {index !== cart.length - 1 && (
//                   <hr className="mt-8 border-gray-200" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT - ORDER SUMMARY */}
//         <div className="lg:col-span-2">
//           <div className="bg-white rounded-3xl shadow-md p-8 sticky top-8">
//             <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

//             <div className="space-y-5 text-xl">
//               <div className="flex justify-between">
//                 <span className="text-gray-500">
//                   Subtotal ({totalItems} items)
//                 </span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>

//               <div className="flex justify-between">
//                 <span className="text-gray-500">Shipping</span>
//                 <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
//                   {shipping === 0 ? "Free" : `$${shipping}`}
//                 </span>
//               </div>

//               <div className="flex justify-between">
//                 <span className="text-gray-500">Tax</span>
//                 <span>${tax.toFixed(2)}</span>
//               </div>

//               <hr />

//               <div className="flex justify-between items-center">
//                 <span className="text-2xl font-semibold">Total</span>
//                 <span className="text-3xl font-semibold text-orange-500">
//                   ${total.toFixed(2)}
//                 </span>
//               </div>

//               <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl text-lg font-medium flex items-center justify-center gap-3 mt-6">
//                 <CreditCard size={22} />
//                 Proceed to Checkout
//               </button>

//               <hr className="my-6" />

//               <div className="space-y-4 text-gray-500">
//                 <div className="flex items-center gap-3">
//                   <Shield size={20} className="text-green-500" />
//                   <span>Secure SSL checkout</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Truck size={20} className="text-blue-500" />
//                   <span>Free returns within 30 days</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Heart size={20} className="text-red-500" />
//                   <span>24/7 customer support</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useCart } from "../../Context/CartContext";
import {
  Trash2,
  Shield,
  Truck,
  Heart,
  CreditCard,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    isLoaded,
  } = useCart();

  const [mounted, setMounted] = useState(true);


  if (!mounted || !isLoaded) {
    return (
      <div className="cart-loading">
        <p>Loading cart...</p>
      </div>
    );
  }

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 100 ? 0 : 10;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = subtotal + shipping + tax;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-loading">
        <div className="empty-cart-box">
          <h1>Your cart is empty 🛒</h1>
          <p>Add some products and they’ll appear here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      {/* Header */}
      <div className="cart-header">
        <div>
          <h1>Shopping Cart</h1>
          <p>{totalItems} items in your cart</p>
        </div>

        <Link href="/" className="continue-shopping">
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>
      </div>

      {/* Main Grid */}
      <div className="cart-grid">

        {/* LEFT */}
        <div className="cart-items-box">
          <div className="cart-items-header">
            <h2>Cart Items</h2>
            <button>Clear All</button>
          </div>

          {cart.map((item, index) => (
            <div key={item.id}>
              <div className="cart-item">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />

                {/* Details */}
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>${item.price}.00 each</p>

                  <div className="quantity-box">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>

                {/* Right */}
                <div className="cart-item-right">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="delete-btn"
                  >
                    <Trash2 size={22} />
                  </button>

                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>

              {index !== cart.length - 1 && <hr />}
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="summary-box">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal ({totalItems} items)</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span className="free-badge">
              {shipping === 0 ? "Free" : `$${shipping}`}
            </span>
          </div>

          <div className="summary-row">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="checkout-btn">
            <CreditCard size={20} />
            Proceed to Checkout
          </button>

          <hr />

          <div className="summary-features">
            <div>
              <Shield size={18} />
              <span>Secure SSL checkout</span>
            </div>

            <div>
              <Truck size={18} />
              <span>Free returns within 30 days</span>
            </div>

            <div>
              <Heart size={18} />
              <span>24/7 customer support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}