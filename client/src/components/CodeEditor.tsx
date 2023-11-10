import React, { useRef, MouseEvent } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "./Button";
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { output, input, language, disabled } from "@/atom";
import LanguageSelector from "./LanguageSelector";
import { runCode } from "@/hooks/runCode";


const App = () => {
  const editorRef = useRef<any | null>(null);
  const inputValue = useRecoilValue(input);
  const languageValue = useRecoilValue(language);
  const [isDisabled, setIsDisabled] = useRecoilState(disabled);
  const setOutputValue = useSetRecoilState(output);
  
  const handleEditorDidMount = (editor: any) =>{
    if (editor) {
      editorRef.current = editor;
    }
  }

  const getCodeContent = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!editorRef.current || !editorRef.current.getValue) {
      return;
    }
    setIsDisabled(true);
    setOutputValue('Loading...');
    const code = editorRef.current.getValue();
    const res = await runCode(code, inputValue, languageValue);
    setOutputValue(res);
    setIsDisabled(false);
  };

  return (
    <div className="h-full border">
      <div className="flex-no-wrap border relative flex w-full items-center justify-between bg-slate-100 p-4 lg:flex-wrap">
        <div>
        <LanguageSelector/>
        </div>
        <Button disabled={isDisabled} onClick={getCodeContent}>
          Run
        </Button>
      </div>
      <Editor
        height="90vh"
        language={languageValue}
        defaultValue="// Start coding here..."
        onMount={handleEditorDidMount}
        
      />
    </div>
  );
};

export default App;
