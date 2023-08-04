import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { fetchBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const booksData = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <div>
        {booksData ? booksData.map((item) => (
          <BookItem
            title={item.title}
            key={item.item_id}
            id={item.item_id}
            author={item.author}
            category={item.category}
          />
        )) : (
          <div>
            <h3>No Books</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default BookList;
