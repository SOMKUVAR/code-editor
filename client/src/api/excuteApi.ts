import axios from "axios";

export const executeCodeApi = async (apiEndpoint: string, data: { code: any; inputData: string }): Promise<string> => {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };
        console.log(data);
        const res = await axios.post(apiEndpoint, JSON.stringify(data), {headers});
        return res.data;
    } catch (err: any) {
        console.error(err);
        return '';
    }
};
