import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "test",
      image: "../assets/react.svg", // Ensure the image path is correct
      text: "React is a JavaScript library for building user interfaces.",
    },
  ]);

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      title: `New Card ${cards.length + 1}`,
      image: "./assets/react.svg",
      text: "This is a new card.",
    };
    setCards([...cards, newCard]);
  };

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Add event</h2>
        <button onClick={addCard} className="add">
          Add
        </button>
      </div>

      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt="Card" className="card-image" />
          <h2>Title: {card.title}</h2>
          <p>{card.text}</p>
          <div className="card-buttons">
            <button className="edit">
              <Link to={`/edit/${card.id}`}>Edit</Link>
            </button>
            <button onClick={() => deleteCard(card.id)} className="delete">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}