import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditPost.css';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', author: '', content: '', image: null });

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const postToEdit = storedPosts.find((post) => post.id === parseInt(id));

    if (postToEdit) {
      setPost({
        title: postToEdit.title,
        author: postToEdit.author,
        content: postToEdit.content,
        image: postToEdit.image || null,
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setPost({ ...post, image: files[0] });
    } else {
      setPost({ ...post, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (post.image instanceof File) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedPost = {
          ...post,
          image: reader.result,
        };

        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        const updatedPosts = storedPosts.map((p) =>
          p.id === parseInt(id) ? updatedPost : p
        );
        localStorage.setItem('posts', JSON.stringify(updatedPosts));

        navigate('/');
      };
      reader.readAsDataURL(post.image);
    } else {
      const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
      const updatedPosts = storedPosts.map((p) =>
        p.id === parseInt(id) ? post : p
      );
      localStorage.setItem('posts', JSON.stringify(updatedPosts));

      navigate('/');
    }
  };

  return (
    <div className="edit-container">
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <br />
        <input
          type="text"
          name="author"
          value={post.author}
          onChange={handleChange}
          placeholder="Author"
          required
        />
        <br />
        <textarea
          name="content"
          value={post.content}
          onChange={handleChange}
          placeholder="Content"
          required
        />
        <br />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditPost;