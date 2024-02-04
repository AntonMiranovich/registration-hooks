import { Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import Reg from "./pages/Reg/Reg";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />}></Route>
      <Route path="/reg" element={<Reg />}></Route>
    </Routes>
  );
}

export default App;
