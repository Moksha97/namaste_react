import React from "react";

class UserClass extends React.Component {
    // when a dlass based component is called first constructor is called and then render is called.
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "dummy",
                location: "dummy",
                avatar_url: "dummy",
            },
        };
        // console.log("UserClass constructor");
    }

    async componentDidMount() {
        console.log("UserClass componentDidMount");
        // api call
        const data = await fetch("https://api.github.com/users/Moksha97");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate() {
        console.log("UserClass componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("UserClass componentWillUnmount");
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        console.log("UserClass render");
        return (
        <div className="userCard">
            <img src={avatar_url} alt="user" />
            <h2> Name: {name}</h2>
            <h3> Location: {location}</h3>
            <h3> Contact: @Moksha66</h3>
        </div>
        );
    }
}

export default UserClass;

// life cycle methods

// --Mounting--
//
// constructor (dummy)
// render (dummy)
//    html dummy
// componentDidMount
//    api call
//    setState (state var is updated)


// --Updating--
// render(api data)
//   html api data
// componentDidUpdate

// --Unmounting--
// componentWillUnmount


