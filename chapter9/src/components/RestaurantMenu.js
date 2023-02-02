import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {IMG_CDN_URL} from "../Constants";
import useRestaurant from "../Utils/useRestaurant";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const restaurant = useRestaurant(resId)
   
        return !restaurant ? (<Shimmer/>) :(
            <div className="menu">
                <div>
                <h1> restaurant id: {resId}</h1>
                <h2> {restaurant?.name} </h2>
                <img src = {IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <h3>{restaurant?.area}</h3>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.avgRating}</h3>
                <h3>{restaurant?.constFortwoMsg}</h3>
                </div>
                <div>
                    <h1>Menu</h1>
                    <ul>
                        {Object.values(restaurant?.menu?.items).map((item)=> (
                        <li key={item?.id}>{item?.name}</li>
                       ))}; 
                    </ul>
                </div>
            </div>
        )
};
export default RestaurantMenu;