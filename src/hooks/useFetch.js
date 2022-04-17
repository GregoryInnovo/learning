import { useState, useEffect } from 'react';
import Axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await Axios.get(endpoint);
    setData(response.data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return data;
};

export default useFetch;
