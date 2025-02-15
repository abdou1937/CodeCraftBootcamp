import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  return (
    <section>
      <div className="header">
        <h2>Add event</h2>
        <Link to="/addCart">
          <button className="add">Add</button>
        </Link>
        <Link to="/">
        <button className="logout">Exit</button>
        </Link>
      </div>
    
    <div className="container">

      
      {posts.length > 0 ? (
        posts.map((card) => (
          <div key={card.id} className="card">
            <div className="card-content">
            {/* Display Image if Available */}
            {card.image && (
              <img
                src={card.image}
                alt="Card"
                className="card-image"
              />
            )}
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            </div>
            <div className="card-buttons">
              <button className="edit">
                <Link className="Link" to={`/EditPost/${card.id}`}>Edit</Link>
              </button>
              <button onClick={() => handleDelete(card.id)} className="delete">
                delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No posts available. Add a new post!</p>
      )}
    </div>
    </section>
  );
};

export default Cart;