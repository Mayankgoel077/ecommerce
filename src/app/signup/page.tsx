// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function SignupPage() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSignup = async () => {
//     const res = await fetch("/api/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(form)
//     });

//     const data = await res.json();

//     alert(data.message);

//     if (res.ok) {
//       localStorage.setItem(
//         "user",
//         JSON.stringify({
//           name: form.name,
//           email: form.email
//         })
//       );

//       router.push("/");
//     }
//   };

//   return (
    
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//       <div className="bg-white w-full max-w-xl rounded-3xl shadow-xl p-12">
//         <h1 className="text-5xl font-bold text-center text-gray-900 mb-10">
//           Sign Up
//         </h1>

//         <div className="space-y-6">

//           <div>
//             <label className="block text-gray-700 mb-2 font-medium">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               onChange={handleChange}
//               className="w-full px-5 py-4 border border-gray-300 rounded-2xl text-lg outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-2 font-medium">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               onChange={handleChange}
//               className="w-full px-5 py-4 border border-gray-300 rounded-2xl text-lg outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-2 font-medium">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               onChange={handleChange}
//               className="w-full px-5 py-4 border border-gray-300 rounded-2xl text-lg outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
//             />
//           </div>

//           <button
//             onClick={handleSignup}
//             className="w-full bg-orange-500 text-white text-2xl font-semibold py-4 rounded-2xl mt-4 hover:bg-orange-400 transition duration-300"
//           >
//             Sign Up
//           </button>

//           <p className="text-center text-gray-500 text-lg mt-6">
//             Already have an account?{" "}
//             <span
//               onClick={() => router.push("/login")}
//               className="text-orange-500 font-semibold cursor-pointer hover:underline"
//             >
//               Login
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      alert(data.message);

      if (res.ok) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: formData.name,
            email: formData.email,
          })
        );

        router.push("/");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <p>Create your account</p>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <p className="bottom-text">
          Already have an account?{" "}
          <span onClick={() => router.push("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}