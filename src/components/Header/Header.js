import React from 'react';
import './Header.css'; // Importe o arquivo de estilos do cabeçalho

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src="caminho-para-a-sua-logo.png" alt="Logo da sua empresa" />
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
