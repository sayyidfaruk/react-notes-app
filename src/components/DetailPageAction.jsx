import PropTypes from 'prop-types'
import React from 'react'
import { BiArchiveIn, BiArchiveOut, BiTrash } from 'react-icons/bi'

function DetailPageAction({ isArchive, onArchive, onDelete }) {
    return (
        <div className='detail-page__action'>
            <button className='action' title='Archive' onClick={onArchive}>
                {isArchive ? <BiArchiveOut /> : <BiArchiveIn />}
            </button>
            <button className='action' title='Delete' onClick={onDelete}>
                <BiTrash />
            </button>
        </div>
    )
}

DetailPageAction.propTypes = {
    isArchive: PropTypes.bool.isRequired,
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DetailPageAction