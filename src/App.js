import "./App";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // const [user, setUser] = useState([]);
  const [user, setUser] = useState("");
  const [show, setShow] = useState(false);
  const [jsonData, setJSONData] = useState({});
  const handleInput = (e) => {
    setShow(false);
    setUser(e.target.value);
  };
  const saveInput = () => {
    setShow({
      show: true,
    });
    console.log("saved", user);
  };
  const callJSON = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setJSONData(json);
      });
  };
  // useEffect(() => {
  //   console.log("use efefect is called");
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setUser([json]);
  //       console.log(json);
  //     });
  // }, []);
  return (
    <div className="App">
      {/* {console.log("user", user.length > 0 && "sas")}
      {user.length > 0 &&
        user.map((each, i) => <div class="title" key={i}>{each.title}</div>)} */}
      <div className="inputFields">
        <input type="text" id="userName" onChange={handleInput} />
        <button id="save" onClick={saveInput}>
          Save
        </button>{" "}
        <br />
        {show && <div id="output">{user}</div>}
      </div>
      <div className="apiFields">
        <button id="apiHit" onClick={callJSON}>
          API call
        </button>
        <div id="apiData">{jsonData.title}</div>
      </div>
    </div>
  );
}

export default App;
