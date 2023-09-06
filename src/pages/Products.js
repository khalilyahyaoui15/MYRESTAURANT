import React, { useState } from 'react';
import { Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './products.css';

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'ALTA OLEA CHEMLALI 500ML HUILE D OLIVE EXTRA VIERGE BIO',
      image: 'https://parfumsdolive.com/6917-home_default/huile-d-olive-extra-vierge-bio-chemlali-500ml.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'HUILE D OLIVE EXTRA VIERGE À L AIL 250ML 2',
      image: 'https://parfumsdolive.com/7229-home_default/huile-d-olive-extra-vierge-a-l-ail-250ml.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'HUILE D OLIVE EXTRA VIERGE AU CITRON 250ML',
      image: 'https://parfumsdolive.com/7230-home_default/huile-d-olive-extra-vierge-au-citron-250ml.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'HUILE D OLIVE EXTRA VIERGE AU PIMENT 250ML',
      image: 'https://parfumsdolive.com/7232-home_default/huile-d-olive-extra-vierge-au-piment-250ml.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'HUILE D OLIVE EXTRA VIERGE BIO CHETOUI 3L',
      image: 'https://parfumsdolive.com/7228-home_default/huile-d-olive-extra-vierge-bio-chetoui-3l.jpg',
    },
  ];

  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id} onClick={() => handleImageClick(product.image)}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <div className="product-info">
            <Typography variant="h4" component="h2" className="product-name">
              {product.name}
            </Typography>
            <Typography variant="body1" className="product-description">
              {product.description}
            </Typography>
            <div className="product-actions">
              <FavoriteIcon className="heart-icon" />
            </div>
          </div>
        </div>
      ))}
      {selectedImage && (
        <div className="selected-image-overlay" onClick={() => setSelectedImage('')}>
          <img src={selectedImage} alt="Selected product" className="selected-image" />
        </div>
      )}
    </div>
  );
};

export default ProductsPage;


