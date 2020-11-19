import React, { useState } from "react";
import "./List.css";

const List = () => {
  const [text, setText] = useState("");
  const [ob, setOb] = useState([]);

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setOb([
      ...ob,
      {
        name: text,
      },
    ]);
    setText("");
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
        {ob.map((obj) => {
          return (
            <div className="products__list">
              <h4>{obj.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
