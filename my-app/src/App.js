import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <LeftNavigation />
        <CentralContainer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Моделі смартфонів</h1>
    </header>
  );
}

function LeftNavigation() {
  return (
    <aside className="left-navigation">
      <ul>
        <li><a href="#">Samsung</a></li>
        <li><a href="#">Apple</a></li>
        <li><a href="#">Xiaomi</a></li>
      </ul>
    </aside>
  );
}

function CentralContainer() {
  return (
    <main className="central-container">
      <h2>Список моделей смартфонів</h2>
      <ul>
        <li>Samsung Galaxy S21</li>
        <li>Samsung Galaxy Note 20</li>
        <li>iPhone 12 Pro</li>
        <li>iPhone SE</li>
        <li>Xiaomi Mi 11</li>
        <li>Xiaomi Redmi Note 9</li>
      </ul>
    </main>
  );
}

export default App;