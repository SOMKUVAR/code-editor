import axios from "axios";

export const executeCodeApi = async (apiEndpoint: string, data: { code: any; inputData: string }): Promise<string> => {
    try {
        const res = await axios.post(apiEndpoint, data);
        return res.data;
    } catch (err: any) {
        console.error(err);
        return '';
    }
};
