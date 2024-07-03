import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleStepChange(e) {
    setStep(+e.target.value);
  }

  function handleCountChange(e) {
    setCount(+e.target.value);
  }

  function handleResetClick() {
    setCount(0);
    setStep(1);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={handleStepChange}
        />
        <span>Step:{step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input type="text" value={count} onChange={handleCountChange} />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <div>
        {step > 1 || count > 0 ? (
          <button onClick={handleResetClick}>Reset</button>
        ) : null}
      </div>
    </div>
  );
}
