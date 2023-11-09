import React, { useRef, MouseEvent } from "react";
import Editor, { Monaco } from "@monaco-editor/react";
import { Button } from "./Button";
import axios from "axios";
import {useRecoilState} from 'recoil';
import { output } from "@/atom/output";
import { input } from "@/atom/input";


const App = () => {
  const editorRef = useRef<any | null>(null);
  const [outputValue, setOutput] = useRecoilState(output);
  const [inputValue, setInputValue] = useRecoilState(input);

  function handleEditorDidMount(editor: any, monaco: Monaco) {
    if (editor) {
      editorRef.current = editor;
    }
  }

  const getCodeContent = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (editorRef.current) {
      const code = editorRef.current?.getValue();
      try{
        console.log(code ,inputValue);
        const res = await axios.post('http://localhost:3001/run-java', {code, inputData : inputValue});
        setOutput(res.data);
      }
      catch (err: any) {
        console.log(err);
      }
      
    }
  };

  return (
    <div className="h-full ">
      <div className="flex-no-wrap border relative flex w-full items-center justify-end bg-slate-100 p-4 lg:flex-wrap lg:justify-end ">
        <Button onClick={getCodeContent}>
        Run
        </Button>
      </div>
      <Editor
        height="90vh"
        defaultLanguage="java"
        defaultValue="// Start coding here..."
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default App;
