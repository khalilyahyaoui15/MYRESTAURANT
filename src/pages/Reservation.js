import React from 'react';
import Typography from '@mui/material/Typography';
import ReservationsForm from '../components/ReservationsForm';
import './Reservation.css';

const Reservation = () => {
  return (
    <div className="reservation-page">
      <header className="reservation-header">
        <Typography variant="h4" component="h1" gutterBottom>
          Nos Reservations
        </Typography>
      </header>
      <section className="reservation-body">
        <ReservationsForm className="reservation-form" />
        <Typography variant="body1" gutterBottom>
          {/* Add any additional content here */}
        </Typography>
      </section>
      <footer className="reservation-footer">
        {/* Add footer content here */}
      </footer>
    </div>
  );
};

export default Reservation;

