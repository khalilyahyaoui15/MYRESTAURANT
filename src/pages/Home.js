import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/reservation');
  };

  const handleProductsClick = () => {
    navigate('/products');
  };

  const handleRestaurantMenuClick = () => {
    navigate('/restaurant-menu');
  };

  const handleMenuFastClick = () => {
    navigate('/Fast-food');
  };

  return (
    <div className="home-container">
      <header>
        <Typography variant="h1" component="h1">
          Bienvenue
        </Typography>
      </header>
      <section>
        <img
          src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"
          alt="Restaurant Logo"
          className="home-image"
        />
        <div className="button-container">
          <button className="home-button" onClick={handleReservationClick}>
            RESERVATION
          </button>
          <button className="home-button" onClick={handleProductsClick}>
            ALTA OLEA
          </button>
          <button className="home-button" onClick={handleRestaurantMenuClick}>
            NOS PLATS
          </button>
          <button className="home-button" onClick={handleMenuFastClick}>
            FASTFOOD
          </button>
        </div>
      </section>
      <footer>
        
      </footer>
    </div>
  );
};

export default Home;


