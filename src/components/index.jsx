import { useState } from "react";

export function Counter() {
  const [Counter, setCounter] = useState(0);
  return (
    <div>
      <h3>Counter:{Counter}</h3>
      <button
        onClick={() => {
          setCounter(Counter + 1);
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          setCounter(Counter - 1);
        }}
      >
        sub1{" "}
      </button>
      <button
        onClick={() => {
          setCounter(Counter * 2);
        }}
      >
        Double{" "}
      </button>
    </div>
  );
}
