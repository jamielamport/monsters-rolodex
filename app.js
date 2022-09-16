const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React IS rendered"),
    React.createElement(Person, { name: "Jamie", occupation: "Web Dev" }, null),
    React.createElement(Person, { name: "Louie", occupation: "Student" }, null),
    React.createElement(Person, { name: "Abby", occupation: "Midwife" }, null),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
