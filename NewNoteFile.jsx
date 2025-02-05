import React, { useState } from 'react';

const NewNoteForm = ({ addNote }) => {
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note);
        setNote('');
    };

    return (
        <form onSubmit={handleSubmit} className="new-note-form">
            <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Enter a new note"
            />
            <button type="submit">Add Note</button>
        </form>
    );
};

export default NewNoteForm;
