import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
    // whenever state variable changes react will rerender the current whole header omponent 
    // but only the button changes(because of reconcilliation algo)
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className='header'>
            <div className='logo-container' style={{margin: "10px"}}>
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        if(btnName === "Login") setBtnName("Logout");
                        else setBtnName("Login");
                        }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;