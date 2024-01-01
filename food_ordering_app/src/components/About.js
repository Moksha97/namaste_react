import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
    constructor(props) {
        super(props);
        // console.log("About constructor");
    }

    componentDidMount() {
        // used to make an api call
        // console.log("About componentDidMount");
    }

    // About constructor
    // About render
    // UserClass constructor
    // UserClass render
    // UserClass componentDidMount
    // About componentDidMount

    render() {
        console.log("About render");
        return  (
            <div>
                <h1> About </h1>
                <div>
                    loggedInUser
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2> Sample about text here!</h2>
    
                <UserClass name= {"Mokshagna (class)"} location={"Dallas"}/>

                {/* if there are multiple childs then in the react life cycle order for the childs it doesnot call the
                 did mount of childs until all the childs are rendered. */}
                 {/* https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ */}
            </div>
        );
    }
}

// const About = () => {
//     // jsx text
//     return  (
//         <div>
//             <h1> About </h1>
//             <h2> Sample about text here!</h2>
//             {/* <User name= {"Mokshagna (functional)"}/> */}

//             <UserClass name= {"Mokshagna (class)"} location={"Dallas"}/>
//         </div>
//     );
// };

export default About;