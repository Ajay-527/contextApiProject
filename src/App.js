import "./App.css";
import Header from "./components/Header";
import { Router, Route , Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />exact
        <Route path="/cart" element={<Cart />}/> 
        </Routes>
    </Router>
  );
}

export default App;
