    const heading = React.createElement("h1", {id: "heading"}, "Hello React!");
    // nested  childs & siblings
    // const parent = React.createElement("div",{id:"parent"}, 
    //                 React.createElement("div",{id:"child"}, [
    //                     React.createElement("h1",{},"I'm an h1 Tag!"),
    //                     React.createElement("h2",{}, "I'm an h2 tag!")
    //                 ]));

    // two childs
    const parent = React.createElement("div",{id:"parent"}, 
    [
        React.createElement("div",{id:"child1"}, [
            React.createElement("h1",{},"I'm an h1 Tag!"),
            React.createElement("h2",{}, "I'm an h2 tag!")
        ]),
        React.createElement("div",{id:"child2"}, [
            React.createElement("h1",{},"I'm an h1 Tag!"),
            React.createElement("h2",{}, "I'm an h2 tag!")
        ])
    ]);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);
    root.render(parent);