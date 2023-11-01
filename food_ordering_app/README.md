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