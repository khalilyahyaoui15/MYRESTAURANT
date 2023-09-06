import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Reservations() {
  return (
    <form className="reservation-form">
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        id="email" // Add id attribute
        name="email" // Add name attribute
      />
      <TextField
        label="Mot de passe"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        id="password" // Add id attribute
        name="password" // Add name attribute
      />
      <TextField
        label="Nombre de personnes"
        variant="outlined"
        type="number"
        fullWidth
        margin="normal"
        id="numberOfPeople" // Add id attribute
        name="numberOfPeople" // Add name attribute
      />
      <TextField
        label="Date de réservation"
        variant="outlined"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        id="reservationDate" // Add id attribute
        name="reservationDate" // Add name attribute
      />
      <TextField
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        id="message" // Add id attribute
        name="message" // Add name attribute
      />
      <Button variant="contained" color="primary">
        Confirmer
      </Button>
    </form>
  );
}
