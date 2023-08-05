import React from 'react';
import BookList from './BookList';
import NewBookForm from './NewBookForm';
import '../styles/Books.css';

function Books() {
  return (
    <div className="list-form-container">
      <BookList />
      <NewBookForm />
    </div>
  );
}

export default Books;
