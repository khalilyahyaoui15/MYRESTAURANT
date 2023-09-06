import React, { useState } from 'react';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import './styles.css';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      name: 'grillade mixte',
      description: 'grillade mixte de viande',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9RXUh40j2a6M5kLbQGoDqENghQ-urzOvVdQ&usqp=CAU',
      isLiked: false,
    },
    {
      name: 'koucha allouch tunisienne',
      description: 'Plat principal : Viande d agneau à la gargoulette " allouche fel 9olla" de la cuisine tunisienne',
      image: 'https://www.tounsia.net/media/cache/hug/uploads/2016/09/7.jpg',
      isLiked: false,
    },
    {
      name: 'fillet de boeuf',
      description: 'fillet de boeuf grrillé',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1oSw4FMeZfzM4QnAWtuCvPRbrSvVtuIoOzQ&usqp=CAU',
      isLiked: false,
    },
    
    {
      name: 'cote a l os',
      description: ' Une Côte à l Os au Barbecue ',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJyW9C_e1zxEvm77Gex-t6cAnoaGmwEC0GSw&usqp=CAU',
      isLiked: false,
    },
    {
      name: 'loup grillé ',
      description: 'Poissons, Loup De Mer Grillé Avec Des Légumes Grillés Au Citron ',
      image: 'https://www.recettes-et-terroirs.com/wp-content/uploads/2019/12/loup-grille-fenouil.jpg',
      isLiked: false,
    },
    {
      name: 'dorade grillé',
      description: 'dorade grillé',
      image: 'https://dxpulwm6xta2f.cloudfront.net/eyJidWNrZXQiOiJhZGMtZGV2LWltYWdlcy1yZWNpcGVzIiwia2V5Ijoic2h1dHRlcnN0b2NrXzIwMDA3MzE0OS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjgwfSwicG5nIjp7InF1YWxpdHkiOjgwfSwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==',
      isLiked: false,
    },
    {
      name: 'Spaghetti aux fruits de mer ',
      description: 'Notre recette inratable de pâtes aux fruits de mer',
      image: 'https://lacuisineensemble.fr/wp-content/uploads/2022/12/recette-pates-aux-fruits-de-mer.jpg',
      isLiked: false,
    },
    {
      name: 'espadon grillé',
      description: 'espadon grillé avec huile d olive',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/05/fb/07/d2/espadon-grille-avec-huile.jpg',
      isLiked: false,
    },
    
  ]
  );

  const handleLikeClick = (itemIndex) => {
    setMenuItems((prevMenuItems) => {
      const updatedMenuItems = [...prevMenuItems];
      updatedMenuItems[itemIndex].isLiked = !updatedMenuItems[itemIndex].isLiked;
      return updatedMenuItems;
    });
  };

  return (
    <div className="menu">
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <Typography variant="h6" className="menu-item-name">
              {item.name}
            </Typography>
            <Typography variant="body2" className="menu-item-description">
              {item.description}
            </Typography>
            <div className="menu-item-actions">
              <IconButton
                onClick={() => handleLikeClick(index)}
                color={item.isLiked ? 'primary' : 'default'}
                aria-label="like"
              >
                <ThumbUpIcon />
              </IconButton>
              <IconButton
                onClick={() => handleLikeClick(index)}
                color={!item.isLiked ? 'primary' : 'default'}
                aria-label="dislike"
              >
                <ThumbDownIcon />
              </IconButton>
              <div className="emoji-icons">
                {item.isLiked ? (
                  <>
                    <SentimentVerySatisfiedIcon className="emoji-icon" />
                    <SentimentSatisfiedIcon className="emoji-icon" />
                  </>
                ) : (
                  <SentimentVeryDissatisfiedIcon className="emoji-icon" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;


