import React from "react";
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/network-data';
import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import DetailPageAction from "../components/DetailPageAction";
import PropTypes from "prop-types";
import LoadingIndicator from "../components/LoadingIndicator";

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
            note: {},
            initializing: true,
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getNote(this.props.id);
        this.setState(() => {
            return {
                note: data,
                initializing: false,
            };
        });
    }

    async onDeleteHandler() {
        await deleteNote(this.props.id);
        this.props.navigate('/');
    }

    async onArchiveHandler() {
        this.state.note.archived ? await unarchiveNote(this.props.id) : await archiveNote(this.props.id);
        this.props.navigate('/');
    }

    render() {
        if (this.state.initializing === true) {
            return <LoadingIndicator />
        }

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