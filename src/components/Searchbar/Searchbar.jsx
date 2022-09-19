import { Component } from 'react';

class Searchbar extends Component {
  render() {
    const { handleFormSubmit, handleInput } = this.props;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            value={this.props.input}
            onChange={handleInput}
            placeholder="Search images and photos"
          />
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
export default Searchbar;
