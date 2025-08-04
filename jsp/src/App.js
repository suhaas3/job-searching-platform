import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import InstahyreCom from "./Components/InstahyreCom/InstahyreCom";
import Activites from "./Components/Activites/Activites";
import Oppertunities from "./Components/Oppertunities/Oppertunities";
import Inbox from "./Components/Inbox/Inbox";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";
import SignOut from "./Components/SignOut/SignOut";
import Login from "./Components/Login/Login";
import SignIn from "./Components/SignUp/SignUp";



function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<InstahyreCom/>}/>
        <Route path="/activites" element={<Activites/>} />
        <Route path="/oppertunities" element={<Oppertunities/>} />
        <Route path="/inbox" element={<Inbox/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/profile" element={<Profile/>} />
         <Route path="/signout" element={<SignOut/>} />
         <Route path="/signup" element={<SignIn/>} />
         <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
