import React, { useState } from 'react';
import NoteList from './NoteList';
import NewNoteForm from './NewNoteForm';

const App = () => {
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    return (
        <div className="app">
            <h1>Note App</h1>
            <NewNoteForm addNote={addNote} />
            <NoteList notes={notes} />
        </div>
    );
};

export default App;
