import React, { useState } from "react";
import "./Cart.css"; 

export default function App() {
  const [cards, setCards] = useState([]);


  const addCard = () => {
    console.log("Le bouton Ajouter a été cliqué, mais il ne fait rien !");
  };

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="container">

      <div className="card">
        <h2>Ajout de carte</h2>
        <button onClick={addCard} className="add">Ajouter</button>
      </div>


      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt="Carte" className="card-image" />
          <h2>ID: {card.id}</h2>
          <p>{card.text}</p>
          <div className="card-buttons">
            <button className="edit">Modifier</button>
            <button onClick={() => deleteCard(card.id)} className="delete">Supprimer</button>
          </div>
        </div>
      ))}
    </div>
  );
}
