import React from "react";
import ReactDOM from "react-dom/client";


const heading2 = React.createElement("div", {}, React.createElement("div", {},
    [React.createElement("h2", {}, "I am an h2 tag 😊 "),
    React.createElement("h3", {}, "I am an h3 tag 😂")
    ]));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading2);

console.log(heading2); // object