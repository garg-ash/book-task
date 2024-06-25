import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function EditBook() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [genre, setGenre] = useState('');
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/books/${id}`)
            .then(response => {
                setTitle(response.data.title);
                setAuthor(response.data.author);
                setPublishedDate(response.data.publishedDate);
                setGenre(response.data.genre);
            })
            .catch(error => console.error(error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBook = { title, author, publishedDate, genre };

        axios.put(`http://localhost:5000/api/books/${id}`, updatedBook)
            .then(() => history.push('/'))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Edit Book</h1>
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
                <button type="submit">Update Book</button>
            </form>
        </div>
    );
}

export default EditBook;
