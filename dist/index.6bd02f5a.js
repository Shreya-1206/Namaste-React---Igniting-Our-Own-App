impo;
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {
            id: "heading"
        }, "Child 1' heading tag 1"),
        React.createElement("h2", {
            id: "heading2"
        }, "Child 1' heading tag 2")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: "h1"
        }, "Child 2' heading tag 1"),
        React.createElement("h2", {
            id: "h2"
        }, "Child 2' heading tag 2")
    ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
