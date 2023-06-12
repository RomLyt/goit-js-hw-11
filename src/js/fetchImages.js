import axios from 'axios';
import Notiflix from 'notiflix';

const KEY = '37220533-1e2f7d52e34e717d7dda1c429';

const pageLimit = 40;

axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = async (queryToFetch, pageToFetch) => {
  try {
    const { data } = await axios({
      params: {
        key: KEY,
        q: queryToFetch,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: pageLimit,
        page: pageToFetch,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Oops! Something went wrong!');
  }
};

export { fetchImages, pageLimit };
