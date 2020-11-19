import React, { useState } from "react";
import "./List.css";
import { ADD } from "./reducer";
import { useStateValue } from "./StateProvider";

const List = () => {
  const [text, setText] = useState("");
  const [state, dispatch] = useStateValue();

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      dispatch({
        type: ADD,
        name: text,
      });
      setText("");
    } else {
      window.alert("kolego wpisz nazwę");
    }
  };

  return (
    <div className="list">
      <h1>Shopping List</h1>
      <form className="form" onSubmit={handleOnSubmit}>
        <input
          onChange={handleOnChange}
          value={text}
          type="text"
          placeholder="Place your items!"
          style={{ textAlign: "center" }}
        ></input>
        <button type="submit">ADD TO CART</button>
      </form>
      <div className="products">
        {state.map((obj, index) => {
          return (
            <div className="products__list" key={index}>
              <h4>{obj.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
