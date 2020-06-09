import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Products from './Products'
import ProductDetail from './ProductDetail'
import data from './data'

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
      <header className="App-header">
        <Link to='/'>
          <h1 className="App-title">ProductsApp</h1>
        </Link>
      </header>
      <div>
        <Route path="/" exact>
          <Products data={data} />
        </Route>
        <Route path="/product/:id">
          <ProductDetail data={data} />
        </Route>
      </div>
    </div>
  );
}

export default App;
