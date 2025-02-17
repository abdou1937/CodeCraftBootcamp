import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AddCart.css";

const AddCart = () => {
  const navigate = useNavigate();
  const [NewCard, setNewCard] = useState({ title: '', author: '', content: '', image: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setNewCard({ ...NewCard, image: files[0] });
    } else {
      setNewCard({ ...NewCard, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (NewCard.image) {
      
      const reader = new FileReader();
      reader.onload = () => {
        const newPost = {
          id: Date.now(),
          title: NewCard.title,
          author: NewCard.author,
          content: NewCard.content,
          image: reader.result,
        };

        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        const updatedPosts = [...storedPosts, newPost];
        localStorage.setItem('posts', JSON.stringify(updatedPosts));


        setNewCard({ title: '', author: '', content: '', image: null });
        navigate('/cart');
      };

      reader.readAsDataURL(NewCard.image);
    } else {
      
      const newPost = {
        id: Date.now(),
        title: NewCard.title,
        author: NewCard.author,
        content: NewCard.content,
        image: null,
      };

      const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
      const updatedPosts = [...storedPosts, newPost];
      localStorage.setItem('posts', JSON.stringify(updatedPosts));

      
      setNewCard({ title: '', author: '', content: '', image: null });
      navigate('/cart');
    }
  };

  return (
    <div className='add-cart'>
      <h2>Add New Card</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={NewCard.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="author"
          value={NewCard.author}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="content"
          value={NewCard.content}
          onChange={handleChange}
          required
        /><br></br>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        /><br></br>
        <button type="submit">Add card</button>
        <button type='button' className='cancel' onClick={() => navigate("/Cart")}>cancel</button>

      </form>
    </div>
  );
};

export default AddCart;