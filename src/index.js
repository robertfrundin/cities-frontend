import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/Auth/Auth";
import { Rooms } from "./pages/Rooms/Rooms";
import { Game } from "./pages/Game/Game";
import { Page404 } from "./pages/Page404/Page404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Auth />}></Route>
      <Route path="auth" element={<Auth />}></Route>
      <Route path="rooms" element={<Rooms />}></Route>
      <Route path="game/:gameid" element={<Game />}></Route>
      <Route path='404' element = {<Page404 />}></Route>
    </Routes>
  </BrowserRouter>
);
