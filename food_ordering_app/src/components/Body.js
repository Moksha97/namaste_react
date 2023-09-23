import RestaurantCard from "./RestaurantCard"; 
import restaurantList from "../utils/mockData";
import { useState } from "react";

// RestaurantList is JSON Data for displaying cards

const Body = () => {
    // Hooks
    // state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] =  useState(restaurantList);

    // let listOfRestaurants = [
    //   {
    //     data: {
    //       id: "74453",
    //       name: "Domino's Pizza",
    //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
    //       cuisines: ["Pizzas"],
    //       costForTwo: 40000,
    //       deliveryTime: 45,
    //       avgRating: "2.5",
    //     }
    //   },
    //   {
    //     data: {
    //       id: "74454",
    //       name: "KFC",
    //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
    //       cuisines: ["Pizzas"],
    //       costForTwo: 40000,
    //       deliveryTime: 45,
    //       avgRating: "4.2",
    //     }
    //   },
    //   {
    //     data: {
    //       id: "74454",
    //       name: "MC. D",
    //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
    //       cuisines: ["Pizzas"],
    //       costForTwo: 40000,
    //       deliveryTime: 45,
    //       avgRating: "4.7",
    //     }
    //   }
    // ];

    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4);
                    setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className='res-container'>
              {listOfRestaurants && listOfRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.data.id} resData = {restaurant}/>
              ))}
                {/* <RestaurantCard resData = {restaurantList[0]}/>
                <RestaurantCard resData = {restaurantList[1]}/>
                <RestaurantCard resData = {restaurantList[2]}/>
                <RestaurantCard resData = {restaurantList[3]}/>
                <RestaurantCard resData = {restaurantList[4]}/> */}
            </div>
        </div>
    )
}

export default Body;