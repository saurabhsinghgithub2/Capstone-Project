import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import About from '../Pages/About';
import Reservation from '../Pages/Reservation';
import Order from '../Pages/Order';
import Login from '../Pages/Login';
import Confirmation from '../Pages/Confirmation';

const Routing = () => {
  return (
    <Routes>

      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservation" element={<Reservation />} />

      <Route path="/order" element={<Order />} />

      <Route path="/login" element={<Login />} />

      <Route path="/confirmation" element={<Confirmation />} />

    </Routes>
  )
}

export default Routing