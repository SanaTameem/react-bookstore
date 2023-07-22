import React from 'react';
import BookItem from './BookItem';
import Form from './Form';
import '../styles/Books.css';

function Books() {
  return (
    <div className="book-list">
      <BookItem />
      <BookItem />
      <BookItem />
      <Form />
    </div>
  );
}

export default Books;
