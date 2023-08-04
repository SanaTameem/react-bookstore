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
      <div className="btns-info-container">
        <div>
          <p className="category">{category}</p>
          <h2 className="title">{title}</h2>
          <p className="author">{author}</p>
        </div>
        <div className="btns-container">
          <button type="button" className="btn">Comment</button>
          <button type="button" className="btn borderd">Edit</button>
          <button type="button" className="btn" onClick={() => dispatch(deleteBook(id))}>Remove</button>
        </div>
      </div>
      <div className="icon-complete">
        <FontAwesomeIcon icon={faCircleNotch} className="complete-circle" />
        <div>
          <p className="percentage">97%</p>
          <p className="completed-text">Completed</p>
        </div>
      </div>
      <div className="chapter-container">
        <p className="current-chapter">Current Chapter</p>
        <p className="lesson">Chapter 17</p>
        <button type="button" className="update-progress">Update Progress</button>
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
