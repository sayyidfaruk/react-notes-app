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
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NotesList