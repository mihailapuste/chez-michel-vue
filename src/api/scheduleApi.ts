import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/v1/';

const api = axios.create({
  baseURL,
});

const getSchedule = async () => {
  try {
    const response = await api.get('schedule/');

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getSchedule,
};
