import axios from "axios";
import {API_URL} from '../utils/path'


export const getShops = async () => {
    try {
      const response = await axios.get(`${API_URL}/shops`);
      return response.data;
    } catch (error) {
      throw new Error('Error');
    }
  };

  export const generateData = async () => {
    try {
      const response = await axios.post(`${API_URL}/shops`);
      return response.data;
    } catch (error) {
      throw new Error('Error');
    }
  };