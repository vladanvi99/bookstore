import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddNewBook from './addNewBook/AddNewBook';
import Book from './book/Book';

const Books = () => {
  const myBooks = [
    {
      id: uuidv4(),
      name: 'Project Hail Mary',
      category: 'action',
      progress: `${Math.floor(Math.random() * 101)}`,
    },
    {
      id: uuidv4(),
      name: 'Relentless',
      category: 'action',
      progress: `${Math.floor(Math.random() * 101)}`,
    },
    {
      id: uuidv4(),
      name: 'The Queen Will Betray You',
      category: 'action',
      progress: `${Math.floor(Math.random() * 101)}`,
    },
    {
      id: uuidv4(),
      name: 'Trusting Molly',
      category: 'action',
      progress: `${Math.floor(Math.random() * 101)}`,
    },
    {
      id: uuidv4(),
      name: 'Capture the Crown',
      category: 'ctio',
      progress: `${Math.floor(Math.random() * 101)}`,
    },
  ];

  return (
    <div className="books-page">
      <ul className="book-list">
        {myBooks.map((book) => (
          <li key={book.id} className="book-card">
            <Book bookInfo={book} />
          </li>
        ))}
      </ul>
      <AddNewBook />
    </div>
  );
};

export default Books;
