import React from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import { input, output } from "@/atom";


const Console = () => {

    const[inputValue, setInputValue] = useRecoilState(input);
    const outputData = useRecoilValue(output);

    return (
            <div className="bg-white h-full pl-3 py-10 grid gap-3">
                <div className="pr-4">
                    <label className="block text-gray-500 font-semibold mb-2" htmlFor="inputValue">Input :</label>
                    <textarea id = "inputValue" className="p-1 h-5/6 border-2 outline-0 transition-all bg-slate-100 w-full" value={inputValue} onChange={(event) => { setInputValue(event.target.value) }} />
                </div>
                <div className="pr-4">
                    <label className="block text-gray-500 font-semibold mb-2" htmlFor="outputValue">Output :</label>
                    <textarea id = "outputValue" className="p-1 border-2 h-5/6 outline-0 transition-all bg-slate-100 w-full" value={outputData} readOnly/>
                </div>
            </div>
    );
};

export default Console;
