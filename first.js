// creating the nested elements in react

const nested = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"sibling1"}),
    React.createElement("h1",{id:"the last one"}, "i am the last inside the nested elements."))

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(nested);
// now if you have to give the multiple elements inside the tag then you have to create the array and put all the newly created tags inside it in the third argument.