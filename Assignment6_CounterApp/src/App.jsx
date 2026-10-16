
import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((previousCount) => previousCount + 1);
    }

    function decrement() {
        setCount((previousCount) => previousCount - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <main className="counter-page">
            <section className="counter-card">
                <p className="eyebrow">REACT HOOKS PRACTICE</p>

                <h1>Counter App</h1>

                <p className="description">
                    Use the buttons below to change the counter value.
                </p>

                <div className="counter-display" aria-live="polite">
                    {count}
                </div>

                <p className="counter-status">
                    {count > 0
                        ? "The counter is positive."
                        : count < 0
                        ? "The counter is negative."
                        : "The counter is at zero."}
                </p>

                <div className="button-group">
                    <button
                        type="button"
                        className="counter-button decrement"
                        onClick={decrement}
                    >
                        − Decrement
                    </button>

                    <button
                        type="button"
                        className="counter-button increment"
                        onClick={increment}
                    >
                        + Increment
                    </button>
                </div>

                <button
                    type="button"
                    className="reset-button"
                    onClick={reset}
                >
                    Reset Counter
                </button>

                <p className="footer-text">
                    Built with React useState
                </p>
            </section>
        </main>
    );
}

export default App;
