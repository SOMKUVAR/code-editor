import React, { useState } from "react";
import { Button } from "./Button";
import { useRecoilState } from 'recoil';
import { getOutput } from "@/selector/getOutput";
import { input } from "@/atom/input";
import { output } from "@/atom/output";


const Console = () => {

    const[inputValue, setInputValue] = useRecoilState(input);
    const[outputData, setOutputData] = useRecoilState(output);

    const clearConsole = () => {

    }

    return (
        <div className="h-full ">
            <div className="flex-no-wrap text-slate-600 border relative flex w-full items-center justify-between bg-slate-100 p-4 lg:flex-wrap">
                <p>
                    Console
                </p>
                <Button onClick={clearConsole}>
                    Clear
                </Button>
            </div>
            <div className="bg-white h-[90vh] pt-3 grid gap-3">
                <div className="pr-4">
                    <label className="block text-gray-500 font-semibold mb-2" htmlFor="input">Input :</label>
                    <textarea id = "input" className="p-1 h-5/6 border-2 outline-0 transition-all bg-slate-100 w-full" value={inputValue} onChange={(event) => { setInputValue(event.target.value) }} />
                </div>
                <div className="pr-4">
                    <label className="block text-gray-500 font-semibold mb-2" htmlFor="input">Output :</label>
                    <textarea className="p-1 border-2 h-5/6 outline-0 transition-all bg-slate-100 w-full " value={outputData}/>

                </div>
            </div>
        </div>
    );
};

export default Console;
