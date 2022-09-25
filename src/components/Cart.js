import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartProd = ({product}) => {

    const { removeItem } = useContext(CartContext)
    
    return (
        <div className="Cart-Item">
            <div className="Cart-Product">
                <div>
                    <img src={product.pictureURL} alt="product"/>
                </div>
                <div>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
            </div>
            <div className="Cart-Delete" onClick={() => removeItem(product.id)}>
                <button onClick={() => removeItem(product.id)}>
                    <img src="https://img.icons8.com/ios/50/000000/delete-forever--v1.png" alt="delete"/>
                </button>
            </div>
        </div>
    )
}

export default CartProd;