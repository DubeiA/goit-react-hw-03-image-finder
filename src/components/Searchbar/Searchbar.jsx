
// const URL = "https://pixabay.com/api/?q=cat&page=1&key=31092155-fdd6914219543248b658a821f&image_type=photo&orientation=horizontal&per_page=12"


import React, { Component } from 'react'

export default class Searchbar extends Component {
    state = { 
        searchName: ''
    }


    handleNameChange = event => { 
        this.setState({
            searchName: event.currentTarget.value.toLowerCase()
        });
    }

    submitForm = event => { 
        event.preventDefault();

        if (this.state.searchName.trim() === '') {
            alert('Something go wrong. Try one more time')
            return
        }
        this.props.onSubmit(this.state.searchName);
        this.setState({ searchName: ''})
    }

  render() {
    return (
        <header className="searchbar">

            <form className="form" onSubmit={this.submitForm}>
                
        <button type="submit" className="button">
            <span className="button-label">Search</span>
        </button>

        <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchName}
            onChange={this.handleNameChange}              
    />
            </form>
        </header>
    )
  }
}

