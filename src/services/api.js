import axios from 'axios';
// const axios = require('axios').default;

export const getPictures = async query => {
  const config = {
    url: 'https://pixabay.com/api/',
    params: {
      key: '29419460-174de553ef6eeb556d53fec27',
      q: '',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: 1,
    },
  };
  try {
    if (query === undefined) query = config.params.q;
    else config.params.q = query;
    const response = await axios(config);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    //     "We're sorry, but you've reached the end of search results."
    console.log('ERROR', error);
  }
};
