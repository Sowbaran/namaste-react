
const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"i'm an h2 tag")
    ]),

        React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"i'm an h2 tag")])
        ]
    
    );



 const heading = React.createElement("h1",
    {id:"heading"},
    "Hello World From React!");
    


const head = React.createElement("h1",{},"I am above the root")
const root = ReactDOM.createRoot(document.getElementById("root"));
const header = ReactDom.createRoot(document.getElementById("header"))
   
root.render(root );

  
    