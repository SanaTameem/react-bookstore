import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import '../styles/BookItem.css';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const BookItem = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="bookItem-Container">
      <div>
        <div>
          <p>{category}</p>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
        <div className="btns-container">
          <button type="button" className="btn">Comment</button>
          <button type="button" className="btn">Edit</button>
          <button type="button" className="btn" onClick={() => dispatch(deleteBook(id))}>Remove</button>
        </div>
      </div>
      <div className="icon-complete">
        <FontAwesomeIcon icon={faCircleNotch} />
        <div>
          <p>65%</p>
          <p>Completed</p>
        </div>
      </div>
      <div>
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
};
BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default BookItem;
