// components/BookList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import Form from './Form';

const BookList = ({ booksData }) => (
  <div className="book-list">
    {booksData.map((book) => (
      <BookItem key={book.id} book={book} />
    ))}
    <Form />
  </div>
);
BookList.propTypes = {
  booksData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default BookList;
