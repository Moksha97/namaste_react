import {useState, useEffect} from 'react';


const User = ({name}) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1);
    useEffect(() => {
        // api call

        return () => {
            // to clean up code
        }
    }, []);

    // async function getUserInfo () {
    //     const data = await fetch("https://api.github.com/users/Moksha97");
    //     const json = await data.json();
    //     console.log(json);
    // }
    return (<div className="userCard">
        <h1>Count: {count}</h1>
        <h1>Count2: {count2}</h1>
        <h2> Name: {name}</h2>
        <h3> Location: Dallas</h3>
        <h3> Contact: @Moksha66</h3>
    </div>
    );
}

export default User;