import React from 'react';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';
import InputForm from '../components/InputForm';

function AddPage() {
    const navigate = useNavigate()
    async function onAddNoteHandler(note) {
        await addNote(note);
        navigate('/');
    }

    return (
        <section className='add-new-page'>
            <InputForm addNote={onAddNoteHandler} />
        </section>
    );
}

export default AddPage;