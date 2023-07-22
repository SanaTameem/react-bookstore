// components/NewBookForm.jsx
import React from 'react';

const NewBookForm = () => (
  <div>
    <h2>Add New Book</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default NewBookForm;
