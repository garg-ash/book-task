import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BooksList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/books')
            .then(response => setBooks(response.data))
            .catch(error => console.error(error));
    }, []);

    const deleteBook = (id) => {
        axios.delete(`http://localhost:5000/api/books/${id}`)
            .then(() => setBooks(books.filter(book => book._id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Books List</h1>
            <ul>
                {books.map(book => (
                    <li key={book._id}>
                        {book.title} by {book.author}
                        <Link to={`/edit/${book._id}`}>Edit</Link>
                        <button onClick={() => deleteBook(book._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BooksList;
