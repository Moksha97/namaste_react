#React Laying the Foundation

#Namaste Food

 // Header
    // Logo
    // Nav Items
// Body
    // Search 
    // Restaurant Container
    // Restaurant cards
    //      Img
    //      Name of Restaurant
    //      Rating, Cuisine, Delivery Time
// Footer
    // copyright
    // links
    // Contact

# React Hooks

JS utility functions
- useState()
- useEffect()

React Algorithm - reconcilliation algorithm ( also known as react fiber)

if a container has 15 res cards, suppose if my ui changes to 3 filtered cards. 
Reacts creates virtual DOM, which is a representation of my actual DOM. Virtual DOM is a object representation of DOM.

Diff algorithm - finds out the diff b/w updated virtual dom and prev virtual dom and calculate's the difference and updates the actual dom.

# 2 types Routing in web apps
Client side Routing - we are not fetching the new page, just component gets loaded/changed
Server side Routing - N/w call -> fetches the html data -> and renders

Styled components are used to style.
Diff frameworks used are:
Material UI
ant Design
bootstrap
chakra UI
tailwind css

<!-- to modify tailwind  or hardcode -->
w-[200px]

Higher order component

->function that takes a component and returns a component

Controlled and Uncontrolled components
-> when we give the power of the component to show or hide to the parent component then the child becomes controlled component.


# REDUX Toolkit
Redux & React are two different libraries.
Zustand is also another library that is used for state management.

- Install reduxjs toolkit, react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector 


- when subscribing make sure we subscribe to the right portion of the state. (optimization)
 Otherwise if we subscribe to the whole store then if anything changes in store then the component where we subscribed will also affect. So choosing the required portion is important.

 - Redux toolkit uses immer to work with immutable states.
