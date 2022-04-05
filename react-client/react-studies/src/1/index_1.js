// Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
//First Option:
/*const App = function() {
    return <div>Hi there!</div>
}*/
//Best Option:
/*const App = () => {
    return <div>Hi there!</div>
}*/
/*const App = () => {
    return (
        <div>
            <label className="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:'white'}}>
                {buttonText}
            </button>
        </div>
    );
}*/
/*function getButtonText(){
    return 'Click on me';
}
const App = () => {
    return (
        <div>
            <label className="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:white}}>
                {getButtonText()}
            </button>
        </div>
    );
}*/
const App = () => {
    const buttonText = {text: 'Click me'};
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:'white'}}>
                {buttonText.text}
            </button>
        </div>
    )
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);