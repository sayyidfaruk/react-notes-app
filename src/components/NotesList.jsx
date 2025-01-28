import React from 'react'
import NoteItem from './NoteItem'
import PropTypes from 'prop-types'

function NotesList({ notes }) {
    return (
        <section className='notes-list'>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} />
            ))}
        </section>
    )
}

NotesList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default NotesList