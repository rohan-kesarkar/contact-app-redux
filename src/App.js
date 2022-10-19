import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AddContact from "./Components/AddContact";
import EditContact from "./Components/EditContact";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<AddContact />} />
          <Route exact path="/edit/:id" element={<EditContact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
