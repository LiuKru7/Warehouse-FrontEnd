import axios, { AxiosResponse } from 'axios';
const API_URL = 'http://localhost:3080';
axios.defaults.baseURL = API_URL;

export const httpRequest = {
    async getRequest(route: string): Promise<AxiosResponse> {
        const response = await axios.get(`/${route}`);
        return response.data;
    },
    async postRequest(route: string, requestData: any): Promise<AxiosResponse> {
        const response = await axios.post(`/${route}`, { requestData });
        return response.data;
    }
}