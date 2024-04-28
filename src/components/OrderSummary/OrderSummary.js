// src/components/OrderSummary/OrderSummary.js

import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ order }) => {
  return (
    <div className="order-summary">
      <h2>Resumo do Pedido</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSummary;
