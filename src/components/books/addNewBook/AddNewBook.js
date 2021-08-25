import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../../../redux/books/books';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [bookInfo, setBookInfo] = useState({
    id: uuidv4(),
    name: '',
    category: 'Action',
  });
  const handleChange = (name) => (e) => {
    setBookInfo({ ...bookInfo, [name]: e.target.value });
  };
  const onClick = () => {
    setBookInfo({ ...bookInfo, id: uuidv4() });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook(bookInfo));
    setBookInfo({ ...bookInfo, name: '' });
  };

  return (
    <section className="add-new-book-section">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <input onChange={handleChange('name')} type="text" name="name" placeholder="Book title" value={bookInfo.name} />
        <select onChange={handleChange('category')} name="category">
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Adventure">Adventure</option>
        </select>
        <button onClick={onClick} type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default AddNewBook;
