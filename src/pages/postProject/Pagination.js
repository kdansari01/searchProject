import React from "react";
import "./pagination.css"
export const Pagination = ({ value, onChange, range }) => {
  let pattern = null;

  switch (true) {
    case range < 7:
      pattern = [...new Array(range)].map((_, i) => i + 1);
      break;
    case value < 4:
      pattern = [1, 2, 3, 4, 5, "...", range];
      break;
    case value > range - 4:
      pattern = [1, "...", range - 4, range - 3, range - 2, range - 1, range];
      break;
    default:
      pattern = [1, "...", value - 1, value, value + 1, "...", range];
  }

  function changeNumber(n) {
    if (typeof n === "number" && n > 0 && n <= range) {
      onChange(n);
    }
  }
  return (
    <div className="container">
      <button className="btn" disabled={value <= 1} onClick={() => changeNumber(value - 1)}>
        {"<"}
      </button>
      {pattern.map((label) => (
        <button
          className={value === label ? "Isactive" : "btn"}
          onClick={() => changeNumber(label)}
          isActive={value === label}
        >
          {label}
        </button>
      ))}
      <button  className="btn" disabled={value >= range} onClick={() => changeNumber(value + 1)}>
        {">"}
      </button>
    </div>
  );
};
