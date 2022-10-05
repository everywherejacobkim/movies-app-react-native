import { BASE_URL } from "./api_config";
import { API_KEY } from "./api_config";

export const GET = async (params) => {
    const API_URL = `${BASE_URL}${params}?api_key=${API_KEY}`;

    const response = await fetch(API_URL, {
        method: 'GET',
    });

    const data = await response.json();

    return data;
}

export const GET_SEARCH = async (params) => {
    const API_URL = `${BASE_URL}${params}`;

    const response = await fetch(API_URL, {
        method: 'GET',
    });

    const data = await response.json();

    return data;
}
