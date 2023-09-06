import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    setShowIcons(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    setShowIcons(false);
  };

  const showGoogleMaps = () => {
    // Add your specific code to open Google Maps
    // For example, you can redirect to a Google Maps URL or use an embedded map component
  };

  return (
    <div
      style={{
        width: '600px',
        height: '300px',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={showGoogleMaps}
    >
      {showIcons && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<PhoneIcon />}
            style={{ marginRight: '10px' }}
            onClick={() => {
              // Add your specific code to handle the phone call
            }}
          >
            Call
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<EmailIcon />}
            onClick={() => {
              // Add your specific code to handle the email
            }}
          >
            Email
          </Button>
        </div>
      )}
      <Typography variant="h6" align="center">
        98 799 755
        <br />
        abidiatef.rfk@gmail.com
      </Typography>
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '8px',
            borderRadius: '4px',
            fontSize: '30px',
          }}
        >
          Salut
        </div>
      )}
    </div>
  );
};

export default Contact;



