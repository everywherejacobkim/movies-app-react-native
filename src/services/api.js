import axios from "axios";
import qs from "qs";
import { BASE_URL } from "./api_config";
import { API_KEY } from "./api_config";

export const GET = async (params) => {
    const API_URL = `${BASE_URL}${params}?api_key=${API_KEY}`;

    let response = await fetch(API_URL, {
        method: 'GET',
    });

    response = response.json();

    return response;
}
