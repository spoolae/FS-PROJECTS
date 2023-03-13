import "./App.css";
import Counter from "./components/counter/Counter";
import StopWatch from "./components/stopWatch/StopWatch";
import UsersLoader from "./components/usersLoader/UsersLoader";

const App = () => {
  return (
    <div>
      {/* <StopWatch />
      <Counter initStep={10} /> */}
      <UsersLoader />
    </div>
  );
};

export default App;
