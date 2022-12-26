import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return  (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className="checkout__ad"
                src="ad.jpg"
                alt=""/>

                <div>
                    
                    <h2 className="checkout__title">Your Cart</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id = {item.id}
                            title ={ item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                            ))}


                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}
export default Checkout