import React from "react";
import ReactDOM from "react-dom";
const parent = React.createElement("div", {id : "parent"},
                 [React.createElement("div", {id : "child"}, [React.createElement("h1", {
                    id :"heading",}, `This is Namaste React`), React.createElement("h2", {
                    id :"heading2",}, "This not dont by jsx ")]), React.createElement("div", {id : "child2"}, 
                [React.createElement("h1", { id :"h1",}, "its done with react.createElement"), React.createElement("h2", {
                   id :"h2",}, "Child 2' heading tag 2")])]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

