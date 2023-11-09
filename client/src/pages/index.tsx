import CodeEditor from "@/components/CodeEditor";
import Console from "@/components/Console";




export default function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="h-full grid grid-cols-2">
       <CodeEditor />
       <Console/>
      </div>
    </main>
  )
}
