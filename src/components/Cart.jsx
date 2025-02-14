import React, { useState } from "react";
import "./Cart.css"; 

export default function App() {
  const [cards, setCards] = useState([]);


  const addCard = () => {
    console.log("");
  };

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="container">

      <div className="card">
        <h2>Add evenet</h2>
        <button onClick={addCard} className="add">Add</button>
      </div>


      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt="Carte" className="card-image" />
          <h2>Titre {card.id}</h2>
          <p>{card.text}</p>
          <div className="card-buttons">
            <button className="edit">Modifier</button>
            <button onClick={() => deleteCard(card.id)} className="delete">remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}
