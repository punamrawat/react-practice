import './App.css';
import ControlledInput from './ControlledInput';
import Counter from './Counter';
import MyComponent from "./MyComponent"
import MyForm from './MyForm';
import MyApp from './MyApp';
import MyComp from './MyComp';
import EventListeners from './EventListeners';
import Controller from './Controllers';
import MagicEightBall from './MagicEightBall';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Counter />
      <ControlledInput />
      <MyForm />
      <MyApp />
      <MyComp />
      <EventListeners />
      <Controller />
      <MagicEightBall />
    </div>
  );
}

export default App;
