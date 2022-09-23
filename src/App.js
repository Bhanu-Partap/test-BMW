import React from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
    <NavigationBar/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </>
  );
}
