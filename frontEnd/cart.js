import React from "react";
import {  useSelector, useDispatch } from "react-redux";
import { removeCart, incrementQuantity, resetQuantity, decrementQuantity } from "./store";

const Cart = () => {
    const items = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    let style = {backgroundColor: 'red', cursor: 'not-allowed', color:'white'}

    const removeItem = (id) => {
        dispatch(removeCart({id}))
    }

    const handleIncrement = (id) => {
        dispatch(incrementQuantity({ id }));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity({ id }));
    };
    
    const resetItem = (id) => {
        dispatch(resetQuantity({ id }));
    };
    return(
        <>
        {!items.length && <div className="empty">empty</div>}
        {items.map(item => (
            <div className="cItems" key={item.id}>
                <div className="cItemImg"><img src={item.imgPath} alt=""/></div>
                <div className="cItemDetails">
                    <div className="detailsTitle">{item.name}</div>
                    <div className="detailsDescription">
                        <p>{item.description}</p><br/>
                        <span className="itemPrice">{item.price} DH</span>
                    </div>
                </div>
                <div className="btnSection">
                    <div className="remove">
                        <button className="removeBtn" onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                    <div className="quantity">
                        <button onClick={() => handleIncrement(item.id)}>+</button>   <span>{item.quantity}</span>   <button onClick={() => handleDecrement(item.id)} style={item.quantity <= 0 ? style : {}}>-</button><br/><br/>
                        <button className="reset" onClick={() => resetItem(item.id)}>reset</button>
                    </div>
                </div>
            </div>
        ))}
    </>)
}

export default Cart