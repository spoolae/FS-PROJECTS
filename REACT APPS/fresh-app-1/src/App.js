import "./App.css";
import Counter from "./components/counter/Counter";
import StopWatch from "./components/stopWatch/StopWatch";

const App = () => {
  return (
    <div>
      <StopWatch />
      <Counter />
    </div>
  );
};

export default App;
