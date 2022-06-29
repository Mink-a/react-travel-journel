import React from 'react';
import './style.css';
import data from './data';

import Card from './Card';
import Nav from './Nav';
import Footer from './Footer';

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.title} places={item} />;
  });

  return (
    <div>
      <Nav />
      <div className="container">{cards}</div>
      <Footer/>
    </div>
  );
}
