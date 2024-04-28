// src/App.js

import React from 'react';
import Header from './components/Header/Header'; // Importe o novo componente Header
import OrderForm from './components/OrderForm/OrderForm';
import MenuItem from './components/MenuItem/MenuItem';
import OrderSummary from './components/OrderSummary/OrderSummary';
import './App.css';

function App() {
  const [orders, setOrders] = React.useState([]);
  const menuItems = [
    { name: 'Café', price: 5.00 },
    { name: 'Suco', price: 7.00 },
    { name: 'Sanduíche', price: 10.00 },
    // Adicione mais itens conforme necessário
  ];

  const handleOrder = (item) => {
    setOrders([...orders, item]);
  };

  return (
    <div className="App">
      <Header /> {/* Substitua o cabeçalho existente pelo novo componente Header */}
      <OrderForm menuItems={menuItems.map(item => item.name)} onOrder={handleOrder} />
      <hr />
      <h2>Menu</h2>
      {menuItems.map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} />
      ))}
      <hr />
      <OrderSummary order={orders} />
    </div>
  );
}

export default App;
