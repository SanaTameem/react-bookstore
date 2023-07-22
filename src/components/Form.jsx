import React from 'react';

function Form() {
  return (
    <div>
      <h2>Add New Book</h2>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <button type="button">Add Book</button>
      </form>
    </div>
  );
}

export default Form;
