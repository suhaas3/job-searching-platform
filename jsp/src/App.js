import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import InstahyreCom from "./Components/InstahyreCom/InstahyreCom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<InstahyreCom/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
