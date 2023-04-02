import React from 'react';
import './BookList.css';

const booksData = [
  {
    title: 'Book Title 1',
    author: 'Author Name 1',
    image: 'https://via.placeholder.com/1600x2500',
    reads: 100,
    subscribers: 50,
    likes: 10,
    description: 'A brief description of Book 1',
    link: 'https://example.com/book1',
  },
  {
    title: 'Book Title 2',
    author: 'Author Name 2',
    image: 'https://via.placeholder.com/1600x2500',
    reads: 200,
    subscribers: 100,
    likes: 20,
    description: 'A brief description of Book 2',
    link: 'https://example.com/book2',
  },
  {
    title: 'Book Title 3',
    author: 'Author Name 3',
    image: 'https://via.placeholder.com/1600x2500',
    reads: 300,
    subscribers: 150,
    likes: 30,
    description: 'A brief description of Book 3',
    link: 'https://example.com/book3',
  },
];

const BookGrid = () => {
  return (
    <div className="book-grid-container">
      {booksData.map((book) => (
        <div className="book-grid-item" key={book.title}>
          <a href={book.link}>
            <img src={book.image} alt={book.title} />
          </a>
          <div className="book-info">
            <h2>
              <a href={book.link}>{book.title}</a>
            </h2>
            <h3>{book.author}</h3>
            <p>Reads: {book.reads}</p>
            <p>Subscribers: {book.subscribers}</p>
            <p>Likes: {book.likes}</p>
            <p>{book.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookGrid;