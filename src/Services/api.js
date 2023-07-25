import axios from 'axios';

const API_KEY = '37184780-a6424730a693355f8efd47397';
const BASE_URL = 'https://pixabay.com/api/';


const GetImages = async (searchQuery, page) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export default GetImages;