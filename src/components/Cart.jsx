import React, { useState } from "react";
import "./Cart.css"; 

export default function App() {
  const [cards, setCards] = useState([]);


  const addCard = () => {
    const newId = cards.length + 1;
    setCards([
      ...cards,
      {
        id: newId,
        text: `Description ${newId}`,
        image: "https://via.placeholder.com/150", 
        isEditing: false, 
      },
    ]);
  };


  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };


  const toggleEditMode = (id) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, isEditing: !card.isEditing } : card
      )
    );
  };


  const saveChanges = (id, newText, newImage) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, text: newText, image: newImage, isEditing: false } : card
      )
    );
  };

  return (
    <div className="container">

      <div className="card">
        <h2>Ajout de carte</h2>
        <button onClick={addCard} className="add">Ajouter</button>
      </div>


      {cards.map((card) => (
        <div key={card.id} className="card">
          {card.isEditing ? (
            <>
              <input
                type="text"
                defaultValue={card.text}
                className="input-text"
                onChange={(e) => (card.text = e.target.value)}
              />
              <input
                type="text"
                defaultValue={card.image}
                className="input-text"
                onChange={(e) => (card.image = e.target.value)}
              />
              <img src={card.image} alt="Prévisualisation" className="card-image" />
              <button onClick={() => saveChanges(card.id, card.text, card.image)} className="save">
                Enregistrer
              </button>
            </>
          ) : (
            <>
              <img src={card.image} alt="Carte" className="card-image" />
              <h2>ID: {card.id}</h2>
              <p>{card.text}</p>
              <button onClick={() => toggleEditMode(card.id)} className="edit">Modifier</button>
              <button onClick={() => deleteCard(card.id)} className="delete">Supprimer</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}















