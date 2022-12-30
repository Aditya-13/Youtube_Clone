import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {maxResults: '50'},
    headers: {
      'X-RapidAPI-Key': '262907d48emsha033bdbfac77f33p13d851jsne3aa0c2e2e63',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
   const { data } = await axios.get(`${BASE_URL}/${url}` , options)

   return data
  }
  