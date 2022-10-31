import "./App.css";
import Finish from "./components/Finish";
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<RegisterForm />} />
      </Routes>
      {/* <Finish /> */}
    </div>
  );
}

export default App;
