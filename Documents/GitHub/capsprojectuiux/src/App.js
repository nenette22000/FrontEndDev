import React from "react";
import {Route, Routes} from "react-router-dom";

import Home from "./Pages/Home"
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Reservations from "./Pages/Reservations"
import OrderOnline from "./Pages/OrderOnline";
import Login from "./Pages/Login";
import NoPage from "./Pages/NoPage";

function App() {
  return (
  <div>
      <Routes>
        <Route path = "/" element={<Home></Home>}></Route>
        <Route path = "/about" element={<About></About>}></Route>
        <Route path = "/login" element={<Login></Login>}></Route>
        <Route path = "/menu" element={<Menu></Menu>}></Route>
        <Route path = "/orderOnline" element={<OrderOnline></OrderOnline>}></Route>
        <Route path = "/reservations" element={<Reservations></Reservations>}></Route>
        <Route path ="*" element={<NoPage></NoPage>}></Route>
      </Routes>
  </div>
  );
}

export default App;
