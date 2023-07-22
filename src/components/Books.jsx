import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookItem from './BookItem';
import Form from './Form';
import '../styles/Books.css';

function Books() {
  const booksData = [
    { id: uuidv4(), title: 'Book 1', author: 'Author 1' },
    { id: uuidv4(), title: 'Book 2', author: 'Author 2' },
    { id: uuidv4(), title: 'Book 3', author: 'Author 3' },
  ];
  return (
    <div className="book-list">
      {booksData.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
      <Form />
    </div>
  );
}

export default Books;
