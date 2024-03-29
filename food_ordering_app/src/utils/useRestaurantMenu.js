import { useState, useEffect } from 'react';
import { swiggy_menu_api_URL } from '../utils/constants';
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    },[]);
    const fetchMenu = async () => {
        const data = await fetch(swiggy_menu_api_URL + resId);
        const json = await data.json();
        console.log("menu data"+ json);
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;