// src/components/MenuItem/MenuItem.js

import React from 'react';
import './MenuItem.css';

const MenuItem = ({ name, price }) => {
  return (
    <div className="menu-item-card">
      <div className="menu-item-content">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-price">Preço: R${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MenuItem;
