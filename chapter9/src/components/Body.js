import { useEffect, useState } from 'react';
// import {restaurantList} from '../Constants';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import {Link} from "react-router-dom";
import { filterData } from '../Utils/helper';
import { GET_RESTAURANT } from "../Constants";
import useOnline from '../Utils/useOnline';


const Body = () => {
        
    const [searchText, setSearchText] = useState("");     // returns = [variable name, function to update the variable]
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    
    // const isOnline = useOnline(); 

    // if (!isOnline) {
    //     return <h1> Offline, please check your internet connection!!!</h1>;
    // }


    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(
            GET_RESTAURANT)
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
       };
  


//    not render component (Early return)
   if(allRestaurants === 0) return null;
   
//    {if(filteredrestaurants?.length === 0) return <h1> No Restaurant match your Filter!!</h1>};

    return (allRestaurants.length === 0) ? <Shimmer /> :  (
        <>
        <div className="search-container">
            <input 
            type="text" 
            className="search-input" 
            placeholder="Search" 
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}
            /> 
            <button className='search-btn' onClick={()=>{
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
            }}>Search</button>
        </div>
       <div className='restaurant-List'>
        {    
        filteredRestaurants.map((restaurant) => {
         return (
            <Link 
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
            >
            <RestaurantCard {...restaurant.data} />
         </Link>
        );
         }  )}
       </div>
       </>
    );
 };

 export default Body;