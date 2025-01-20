import React from "react";
import { getArchivedNotes } from "../utils/local-data";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import NoteListEmpty from "../components/NoteListEmpty";
import PropTypes from "prop-types";

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get("keyword");

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return (
        <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
    )
}

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || "",
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState({ keyword });
        this.props.keywordChange(keyword);
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
        })

        return (
            <>
                <h2>Catatan Arsip</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                {notes.length ? <NotesList notes={notes} /> : <NoteListEmpty />}
            </>
        );
    }
}

ArchivePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;