// src/components/OrderForm/OrderForm.js

import React, { useState } from 'react';
// import MenuItem from '../MenuItem/MenuItem'; 
// import OrderSummary from '../OrderSummary/OrderSummary'; 
import './OrderForm.css';
const OrderForm = ({ menuItems, onOrder }) => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleSelectItem = (e) => {
    setSelectedItem(e.target.value);
  };

  const handleOrder = () => {
    if (!selectedItem) return;
    onOrder(selectedItem);
    setSelectedItem('');
  };

  return (
    <div className="order-form">
      <h2>Realizar Pedido</h2>
      <select value={selectedItem} onChange={handleSelectItem}>
        <option value="">Selecione um item</option>
        {menuItems.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
      <button onClick={handleOrder}>Fazer Pedido</button>
    </div>
  );
};

export default OrderForm;
