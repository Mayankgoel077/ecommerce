export default function ProductCard({ image, title, price }){
    return(
        <div className="card">
            <img src={image} alt={title} />

            <div className="card-content">
                <h3>{title}</h3>

                <h2>{price}</h2>

                <button>Add to cart</button>

            </div>

            <div className="ProductQuantity">
                <button className="add-btn">+</button>
                <button className="sub-btn">-</button>
            </div>
        </div>

       
    );
}