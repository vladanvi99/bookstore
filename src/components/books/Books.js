import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddNewBook from './addNewBook/AddNewBook';
import Book from './book/Book';

const Books = () => {
  const myBooks = [
    {
      id: uuidv4(),
      name: 'Project Hail Mary',
      author: 'Andy Weir',
      category: 'action',
      progress: '69',
      chapter: 'Chapter 5',
    },
    {
      id: uuidv4(),
      name: 'Relentless',
      author: 'Jonathan Maberry',
      category: 'action',
      progress: '80',
      chapter: 'Chapter 8',
    },
    {
      id: uuidv4(),
      name: 'The Queen Will Betray You',
      author: 'Sarah Henning',
      category: 'action',
      progress: '59',
      chapter: 'Chapter 8',
    },
    {
      id: uuidv4(),
      name: 'Trusting Molly',
      author: 'Susan Stoker',
      category: 'action',
      progress: '20',
      chapter: 'Chapter 1',
    },
    {
      id: uuidv4(),
      name: 'Capture the Crown',
      author: 'Jennifer Estep',
      category: 'ctio',
      progress: '30',
      chapter: 'Chapter 1',
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
