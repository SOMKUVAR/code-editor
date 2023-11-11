import React, { ChangeEvent } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { LANGUAGES } from '@/constant';
import { output, disabled, language } from '@/atom';


const LanguageSelector = () => {
    const isDisabled = useRecoilValue(disabled);
    const [languageValue, setLanguageValue] = useRecoilState(language);
    const setOutputContent = useSetRecoilState(output);

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setLanguageValue(event.target.value);
        setOutputContent("");
    }

    return (
        <select disabled = {isDisabled} value={languageValue} className="font-semibold w-[100px] py-1 px-1 rounded border-none outline-none cursor-pointer" onChange={onChange}>
            {
                LANGUAGES.map((language) => <option key={language.name} value={language.name}>{language.name}</option>)
            }
        </select>
    )
}

export default LanguageSelector;