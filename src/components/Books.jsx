import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';
import NewBookForm from './NewBookForm';

function Books() {
  const booksData = [
    { id: uuidv4(), title: 'Book 1', author: 'Author 1' },
    { id: uuidv4(), title: 'Book 2', author: 'Author 2' },
    { id: uuidv4(), title: 'Book 3', author: 'Author 3' },
  ];

  return (
    <div>
      <BookList booksData={booksData} />
      <NewBookForm />
    </div>
  );
}

export default Books;
