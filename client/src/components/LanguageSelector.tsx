import React, { ChangeEvent } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LANGUAGES } from '@/constant';
import { disabled, language } from '@/atom';


const LanguageSelector = () => {
    const isDisabled = useRecoilValue(disabled);
    const [languageValue, setLanguageValue] = useRecoilState(language);

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setLanguageValue(event.target.value);
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