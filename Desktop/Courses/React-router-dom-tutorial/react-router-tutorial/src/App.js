import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
      </div>
      <Routes>
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/profile" component={Profile}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
