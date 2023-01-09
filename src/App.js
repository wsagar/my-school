import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Outlet } from "react-router";
import { Home } from "./Pages/Home/Home";
import { ContactUs } from "./Pages/ContactUs/CountactUs";
import { About } from "./Pages/About/About";
import { AppHeader } from "./components/AppHeader/AppHeader";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
