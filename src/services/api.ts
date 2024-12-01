import axios from 'axios';

import { BASE_URL, PRODUCTS } from '../utils/constants';

export const fetchData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}${PRODUCTS}`);
        return response?.data;
    } catch (error) {
        console.error(error);
        return error
    }
};

