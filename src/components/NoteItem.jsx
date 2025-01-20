import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { showFormattedDate } from '../utils'

function NoteItem({ note }) {
  return (
    <article className='note-item'>
      <Link to={`/notes/${note.id}`} className='note-item__link'>
        <h3 className='note-item__title'>{note.title}</h3>
      </Link>
      <p className='note-item__createdAt'>{showFormattedDate(note.createdAt)}</p>
      <p className='note-item__body'>{note.body}</p>
    </article>
  )
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
}

export default NoteItem