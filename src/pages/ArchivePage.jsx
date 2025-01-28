import React from "react";
import { getArchivedNotes } from "../utils/network-data";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import NoteListEmpty from "../components/NoteListEmpty";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import LoadingIndicator from "../components/LoadingIndicator";

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { locale } = React.useContext(LocaleContext);
    const keyword = searchParams.get("keyword");

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return (
        <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} locale={locale} />
    )
}

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            keyword: props.defaultKeyword || "",
            initializing: true,
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getArchivedNotes();
        this.setState(() => {
            return {
                notes: data,
                initializing: false,
            };
        });
    }

    onKeywordChangeHandler(keyword) {
        this.setState({ keyword });
        this.props.keywordChange(keyword);
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
        })

        if (this.state.initializing === true) {
            return <LoadingIndicator />
        }

        return (
            <>
                <h2>{this.props.locale === 'id' ? 'Catatan Arsip' : 'Archived Note'}</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                {notes.length ? <NotesList notes={notes} /> : <NoteListEmpty />}
            </>
        );
    }
}

ArchivePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
};

export default ArchivePageWrapper;