import React, { useState } from "react";
import "./List.css";

const List = () => {
  const data = [{ name: "michał" }];
  const [text, setText] = useState("");
  const [ob, setOb] = useState(data);

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

  console.log(typeof ob);
  console.log(ob);

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
        {ob.map((name) => {
          return name.name;
        })}
      </div>
    </div>
  );
};

export default List;
