import React from "react";
import style from "./Training.module.css";
import Data from "./Data";

export function Training() {
  return (
    <>
      <h1>Trainer section</h1>
      <div className={style.container}>
        {Data.map((item, index) => {
          return (
            <div className={style.card} key={item.id}>
              <img src={item.Img} alt="image" />
              <h3>{item.Name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}
