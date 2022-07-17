import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {GlobalStyles} from "./components/General";

function App() {
  return (
      <>
          <GlobalStyles/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
