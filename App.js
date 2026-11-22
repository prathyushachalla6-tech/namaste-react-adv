   //const heading=  React.createElement("h1",{id:"heading"},"Namaste React123");
     

      const heading2=React.createElement("div",{},React.createElement("div",{},
        [React.createElement("h2",{},"I am an h2 tag"),
            React.createElement("h3",{},"I am an h3 tag")
        ]));
 const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(heading2);