import { WeatherList } from "./components/WeathetList";
import logo from "./logo.svg";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro"></p>
      <WeatherList />
    </div>
  );
};