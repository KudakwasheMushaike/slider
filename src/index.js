import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { getDogs } from "./dogapi";
import "./styles.css";

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [count, setCount] = useState(0);


  useEffect(() => {
    getDogsAsync();
  }, []);

  async function getDogsAsync() {
    const dogs = await getDogs();
    setDogs(dogs);
  }

  function incrementCount(count){
    setCount(count+1);
  }


  function incrementCount(count){
    setCount(count-1);
  }

  console.log("Dogs", dogs);
  return (
    <div>
      <img src={dogs.length > 0 && dogs[count].url}> </img>
      <button onCLick = {incrementCount}> < </button>
      <button> onClick = {decrementCount} > </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
