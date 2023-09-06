import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Reservation from '../pages/Reservation';
import Products from '../pages/Products';
import MenuRestaurant from '../pages/MenuRestaurant';
import MenuFast from '../pages/MenuFast';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/products" element={<Products />} />
      <Route path="/restaurant-menu" element={<MenuRestaurant />} />
      <Route path="/fast-food" element={<MenuFast />} />
    </Routes>
  );
};

export default AppRoutes;
