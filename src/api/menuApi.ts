import { baseApi } from './baseApi';

const getMenu = async () => {
  try {
    const response = await baseApi.get('menu/');

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getMenu,
};
