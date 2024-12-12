import logo from "./logo.svg";
import "./App.css";
import _ from "lodash";

function App() {
  const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 22 },
    { id: 3, name: "Alice", age: 30 },
    { id: 4, name: "Bob", age: 22 },
  ];
  const filteredData = _.filter(data, (person) => person.age > 22);
  const sortedData = _.sortBy(filteredData, "age");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {sortedData?.map((item) => {
          return <div>{item?.name}</div>;
        })}
      </header>
    </div>
  );
}

export default App;
