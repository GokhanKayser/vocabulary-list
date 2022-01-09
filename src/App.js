import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home, Application, Login } from "./views";
import { Navbar, Footer } from "./components"



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
