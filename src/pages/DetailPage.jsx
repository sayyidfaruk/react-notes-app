import React from "react";
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/local-data';
import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import DetailPageAction from "../components/DetailPageAction";
import PropTypes from "prop-types";

function DetailPageWrapper() {
    const { id } = useParams();
    const navigate = useNavigate()

    return (
        <DetailPage id={id} navigate={navigate} />
    )
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: getNote(this.props.id)
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onEditHandler = this.onEditHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    onDeleteHandler() {
        deleteNote(this.props.id);
        this.props.navigate('/');
    }
    onEditHandler() { }
    onArchiveHandler() {
        this.state.note.archived ? unarchiveNote(this.props.id) : archiveNote(this.props.id);
        this.props.navigate('/');
    }

    render() {
        return (
            <section className='detail-page'>
                <h3 className='detail-page__title'>{this.state.note.title}</h3>
                <p className='detail-page__createdAt'>{showFormattedDate(this.state.note.createdAt)}</p>
                <div className='detail-page__body'>{this.state.note.body}</div>
                <DetailPageAction onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} isArchive={this.state.note.archived} />
            </section>
        )
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired
};

export default DetailPageWrapper