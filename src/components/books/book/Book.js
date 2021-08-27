/* eslint-disable react/prop-types, camelcase */
import React from 'react';
import {
  CircularProgressbar,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './book.scss';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/books/books';

const Book = ({ bookInfo, progress }) => {
  const dispatch = useDispatch();
  const {
    item_id, title, category,
  } = bookInfo;
  return (
    <div className="card-wrap">
      <div className="start">
        <div className="left">
          <p className="category">Action, Adventure, Comedy</p>
          <h3>{title}</h3>
          <p className="author">{category}</p>
          <div className="book-options">
            <button type="button">Comments</button>
            <button onClick={() => dispatch(removeBook(item_id))} type="button">Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="right">
          <div className="progress-bar">
            <CircularProgressbar value={progress} />
          </div>
          <div className="progress-info">
            <p className="proggress-text">
              {progress}
              %
            </p>
            <p className="completed-text">Completed</p>
          </div>
        </div>
      </div>
      <div className="end">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter-name">Chapter 1</p>
      </div>
    </div>
  );
};

export default Book;
