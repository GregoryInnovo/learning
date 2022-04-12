// admin the requests the endpoints
const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_URL_VERSION;

const endpoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getAllProducts: `${API}/api/${VERSION}/products`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getAllUsers: `${API}/api/${VERSION}/users`,
    userIsAvailable: `${API}/api/${VERSION}/users/is-available`,
  },
  categories: {
    getAllCategories: `${API}/api/${VERSION}/categories`,
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getCategoryWithProduct: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    upload: `${API}/api/${VERSION}/files/upload`,
    getFile: (fileName) => `${API}/api/${VERSION}/files/${fileName}`,
  },
};

export default endpoints;
