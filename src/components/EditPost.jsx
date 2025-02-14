import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({title:'',author:'',content:'',})
  
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const postToEdit = storedPosts.find(post => post.id === parseInt(id));
    if (postToEdit) {
      setPost({
        title: postToEdit.title,
        author: postToEdit.author,
        content: postToEdit.content,
      });
    }
  }, [id]);
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {id: Date.now(),...post};

    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const updatedPosts = [...storedPosts, newPost];
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    navigate('/');
  };
  return (
    <>
    <h1>Edit Post</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={post.title} onChange={handleChange}/><br />
      <input type="text" name="author" value={post.author} onChange={handleChange}/><br />
      <input type="text" name="content" value={post.content} onChange={handleChange}/><br />
      <button type='submit'>save</button>
    </form>
    </>
  )
}

export default EditPost