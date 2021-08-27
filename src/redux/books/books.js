import axios from 'axios';
import { URL, PASSWORD } from '../../api/api';

const CREATE_BOOK = 'bookstore/books/create';
const REMOVE_BOOK = 'bookstore/books/remove';
const GET_BOOKS = 'bookstore/books/get';
const initialState = {
  books: [],
};

// FUNCTIONS
const postBook = (book) => {
  axios.post(`${URL}${PASSWORD}/books`, book);
};
const deleteBook = (id) => {
  axios.delete(`${URL}${PASSWORD}/books/${id}`);
};
// ACTIONS
export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});
export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});
export const getBooks = (books) => ({
  type: GET_BOOKS,
  payload: books,
});
export const fetchBooks = () => (dispatch) => {
  axios.get(`${URL}${PASSWORD}/books`)
    .then((response) => {
      const books = [];
      const { data } = response;
      Object.entries(data).forEach(([key, value]) => {
        const id = key;
        const bookInfo = value[0];
        const book = {
          item_id: id,
          title: bookInfo.title,
          category: bookInfo.category,
        };
        books.push(book);
      });
      dispatch(getBooks(books));
    });
};

// REDUCER
const booksReducer = (state = initialState, action) => {
  let newArr = [];
  switch (action.type) {
    case GET_BOOKS:
      newArr = action.payload.slice();
      return { ...state, books: newArr };
    case CREATE_BOOK:
      newArr = [...state.books, action.payload];
      postBook(action.payload);
      return { ...state, books: newArr };
    case REMOVE_BOOK:
      newArr = state.books.filter((book) => book.item_id !== action.payload);
      deleteBook(action.payload);
      return { ...state, books: newArr };
    default:
      return state;
  }
};

export default booksReducer;
