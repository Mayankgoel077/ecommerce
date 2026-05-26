// type ProductCardProps = {
//     image: string;
//     title: string;
//     price: string;
// };




// export default function ProductCard({ image, title, price }: ProductCardProps){
//     return(
//         <div className="card">
//             <img src = {image} alt={title} />

//             <div className="card-content">
//                 <h3>{title}</h3>

//                 <h2>{price}</h2>

//                 <button>Add to cart</button>

//             </div>

//             <div className="ProductQuantity">
//                 <button className="add-btn">+</button>
//                 <button className="sub-btn">-</button>
//             </div>
//         </div>

       
//     );
// }

"use client";

import { useCart } from "../Context/CartContext";
import Image from "next/image";


type ProductCardProps = {
    id: number;
    image: string;
    title: string;
    price: number;
};

export default function ProductCard({
    id,
    image,
    title,
    price
}: ProductCardProps) {

    const {
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        cart
    } = useCart();

    const cartItem = cart.find((item) => item.id === id);

    return (
        <div className="card">
            <Image src={image} alt={title} width={200} height={200} />

            <div className="card-content">
                <h3>{title}</h3>

                <h2>${price}.00</h2>

                <button
                    onClick={() => {
                        console.log("ADDING PRODUCT");
                            addToCart({
                            id,
                            image,
                            title,
                            price
                        });
                    }}
                >
                    Add to cart
                </button>
            </div>

            <div className="ProductQuantity">
                <button
                    className="add-btn"
                    onClick={() => increaseQuantity(id)}
                >
                    +
                </button>

                <span>
                    {cartItem ? cartItem.quantity : 0}
                </span>

                <button
                    className="sub-btn"
                    onClick={() => decreaseQuantity(id)}
                >
                    -
                </button>
            </div>
        </div>
    );
}