import React from "react";
import "./Home.css";
import Product from './Product';

function Home(){
    return(
        <div className="Home">
           <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg" alt=" " />
           </div>
            <div className="home__row">
                <Product
                    id = {120930}
                    title = "The lean startup"
                    price = {29.99}
                    image = "ericries.jpg"
                    rating = {3}
                
                />
                <Product
                    id = {349032}
                    title = "Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life"
                    price = {274.99}
                    image = "airpod.jpg"
                    rating = {5}
                
                />
            </div>
            <div className="home__row">
                <Product
                    id = {893467}
                    title="Nintendo Switch OLED Model w/ White Joy-Con"
                    price={348.98}
                    image= "nintendo.jpg"
                    rating = {5}
                />
                <Product
                    id = {673800}
                    title="SAMSUNG Galaxy Watch 4 40mm Smartwatch with ECG Monitor Tracker for Health, Fitness, Running, Sleep Cycle"
                    price={139.99}
                    image= "watch4.jpg"
                    rating = {4}
                />
                <Product
                    id = {893200}
                    title="Xbox X"
                    price={535.34}
                    image= "xbox.jpg"
                    rating = {4}
                />            
            </div>
            <div className="home__row">
                <Product
                    id = {290199}
                    title= "Fisher-Price Harley-Davidson Tricycle with Handlebar Grips and Storage Area, Multi-Terrain Tires, Tough Trike [Amazon Exclusive]"
                    price = {39.99}
                    image ="bike.jpg"
                    rating= {3}
                />                
            </div>     


        </div>

    );
}
export default Home;