import { Component } from "react";
import styled from './Searchbar.module.css'


export class Searchbar extends Component {
    state = {
        query: ''
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
    }
    handleChange = (e) => {
        this.setState({ query: e.target.value });
}
    render() {
        return (
            <header className={styled.searchbar}>
                <form onSubmit={this.handleSubmit} className={styled.form}>
                    <button type="submit" className={styled['form-button']}>
                        <span className={styled['form-button-label']}>Search</span>
                    </button>

                    <input
                        className={styled['form-input']}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}