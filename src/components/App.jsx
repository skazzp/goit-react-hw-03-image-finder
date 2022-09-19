// import axios from 'axios';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import * as API from '../services/api';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    response: [],
    q: '',
    isLoading: false,
    error: null,
  };
  handleFormSubmit = async event => {
    event.preventDefault();
    const query = this.state.q;
    const response = await API.getPictures(query);
    console.log(response);
    this.setState({ response: response.hits });
    this.setState({ q: '' });
  };
  handleInput = event => {
    const { value } = event.target;
    this.setState({ q: value });
  };

  render() {
    const { q, response } = this.state;
    // console.log(response);
    return (
      <>
        <Searchbar
          handleFormSubmit={this.handleFormSubmit}
          handleInput={this.handleInput}
          input={q}
        />
        <ImageGallery data={response} />
      </>
    );
  }
}
