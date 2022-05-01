import Axios from 'axios';
import endpoints from '@services/api';

const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  const response = await Axios.post(endpoints.products.addProducts, body, config);
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await Axios.delete(endpoints.products.deleteProduct(id));
  return response.data;
};

export { addProduct, deleteProduct };
