import { executeCodeApi } from "@/api";
import { LANGUAGES } from "@/constant"


export const runCode = async (code: any, inputData: string, languageName: string): Promise<string> => {
    const language = LANGUAGES.find((lang) => lang.name === languageName);
    if (!language) {
        return '';
    }

    const languageApi = language.api;
    const apiEndpoint = `${process.env.BACKEND_URL}/${languageApi}`;

    console.log(apiEndpoint);

    return executeCodeApi(apiEndpoint, { code, inputData });
};
