import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [genre, setGenre] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { title, author, publishedDate, genre };

        axios.post('http://localhost:5000/api/books', newBook)
            .then(() => history.push('/'))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Add Book</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div>
                    <label>Published Date:</label>
                    <input type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} required />
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default AddBook;
