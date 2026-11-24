import React from "react";
import ReactDOM from "react-dom/client";

// React Element -> React.createElement -> object

const heading = React.createElement('h1',{id:"heading"},"I am an h1 tag");
//JSX (transpiled before it reached the JS Engine) 
const jsxHeading = <h1  className="namaste">Namaste React using JSX </h1>;
console.log(jsxHeading)

//React Functional Component
const HeadingComponent = ()=>{
    return <h1>Namaste react Functional Component</h1>
}

const number =1000;
//Component Composition
const TitleComponent = ()=>
  (
    <div>
       <h2> {200+1000}</h2>
      <HeadingComponent/>
     <div>Naste Title Component</div>
     </div>
  )

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TitleComponent />);