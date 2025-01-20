import React from 'react';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';
import InputForm from '../components/InputForm';

function AddPage() {
    const navigate = useNavigate()
    function onAddNoteHandler(note) {
        addNote(note);
        navigate('/');
    }

    return (
        <section className='add-new-page'>
            <InputForm addNote={onAddNoteHandler} />
        </section>
    );

}

export default AddPage;