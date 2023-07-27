    import React from 'react';
    import ReactDOM from 'react-dom/client';

    const elem = <h4>child element</h4>

    const parentEle = (
        <>
            <h3>parent element</h3>
            {elem}
        </>
        );


    const Title = () => (<>
        <h2> Title </h2>
        {parentEle}
        {10+20}
    </>
    )

    const Heading = () => (
        <>
            <h1 className="main"> Welcome to my foundation!</h1>
            <Title />
        </>
    );


    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Heading />);