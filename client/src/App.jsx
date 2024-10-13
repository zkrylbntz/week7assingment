import "./App.css";
import { Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import Form from "./components/Form";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/submit-a-review" element={<Form />} />
        <Route path="/reviews" element={<Posts />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
