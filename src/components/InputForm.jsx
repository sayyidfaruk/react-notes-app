import PropTypes from 'prop-types';
import React from 'react'
import { FiCheck } from 'react-icons/fi';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState({ title: event.target.value });
    }

    onBodyChangeHandler(event) {
        this.setState({ body: event.target.value });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state)
    }

    render() {
        return (
            <section className='add-new-page'>
                <form className="add-new-page__input" onSubmit={this.onSubmitHandler}>
                    <input
                        className="add-new-page__input__title"
                        placeholder="Masukan judul"
                        name='title'
                        value={this.state.title}
                        onChange={this.onTitleChangeHandler}
                    />
                    <textarea
                        className="add-new-page__input__body"
                        placeholder="Tuliskan catatanmu disini"
                        name='body'
                        value={this.state.body}
                        onChange={this.onBodyChangeHandler}
                    />
                    <div className="add-new-page__action">
                        <button className="action" type="submit" title="Simpan">
                            <FiCheck />
                        </button>
                    </div>
                </form>
            </section>
        );
    }
}

InputForm.propTypes = {
    addNote: PropTypes.func.isRequired
};

export default InputForm