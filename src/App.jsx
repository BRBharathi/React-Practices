import "./App.css";
import ClickCounter from "./components/ClickCounter";
import WithCounterComponent from "./components/WithCounterComponent";
import HoverCounter from "./components/HoverCounter";

function App() {
  const ClickCounterWithCounter = WithCounterComponent(ClickCounter);
  const HoverCounterWithCounter = WithCounterComponent(HoverCounter);

  return (
    <div>
      <ClickCounterWithCounter />

      <HoverCounterWithCounter />
    </div>
  );
}

export default App;
