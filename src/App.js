import logo from "./logo.svg";
import "./App.css";
import Clock from "./Components/common/Clock.jsx";
import Counter from "./Components/Counter.jsx";
import GitHubUser from "./Components/GitHubUser.jsx";

function App() {
  return (
    <div className='App'>
      <header className='main-heading'>
        <h1>React Problems</h1>
      </header>
      <div>
        <h2>Clock Component : Class Component using lifecycles</h2>
        <p>
          <Clock />
        </p>
        <h2>
          Reducer Component : Functional Component using useReducer instead of
          useState for Counter
        </h2>
        <p>
          <Counter />
        </p>
        <h2>GitHub User Details</h2>
        <p>
          <GitHubUser />
        </p>
      </div>
    </div>
  );
}

export default App;
