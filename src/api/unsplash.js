import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID pCExx0vUSczG1TxNsDoa02KVtrNzisFKLrvyuNkb26k',
  },
});
