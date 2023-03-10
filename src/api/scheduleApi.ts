import { baseApi } from './baseApi';

const getSchedule = async () => {
  try {
    const response = await baseApi.get('schedule/');

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getSchedule,
};
