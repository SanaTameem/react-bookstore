import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/booksSlice';
import '../styles/NewBookForm.css';

const NewBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = () => {
    if (!title || !author || !category) {
      return;
    }
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
      author,
    };
    dispatch(postBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Book</h2>
      <form className="form">
        <input
          className="title-input"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="author-input"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select className="category-select" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>Select an option</option>
          <option value="Fiction">Fiction</option>
          <option value="Mystery/Thriller">Mystery/Thriller</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science and Nature">Science and Nature</option>
          <option value="Poetry">Poetry</option>
        </select>
        <button type="button" className="add-btn" onClick={handleAddBook}>Add Book</button>
      </form>
    </div>
  );
};

export default NewBookForm;
