import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import '../styles/BookItem.css';

function BookItem() {
  return (
    <div className="bookItem-Container">
      <div>
        <div>
          <p>Category</p>
          <h2>Book Name</h2>
          <p>Author Name</p>
        </div>
        <div className="btns-container">
          <button type="button" className="btn">Comment</button>
          <button type="button" className="btn">Edit</button>
          <button type="button" className="btn">Remove</button>
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

export default BookItem;
