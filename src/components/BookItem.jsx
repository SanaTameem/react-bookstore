import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import '../styles/BookItem.css';
import RemoveBtn from './RemoveBtn';

function BookItem({ book }) {
  return (
    <div className="bookItem-Container">
      <div>
        <div>
          <p>Category</p>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
        <div className="btns-container">
          <button type="button" className="btn">Comment</button>
          <button type="button" className="btn">Edit</button>
          <RemoveBtn bookId={book.id} />
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
}
BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookItem;
