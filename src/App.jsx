import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './gallery';

function App() {
  return (
    <div>
      <Gallery />
    </div>
  );
}

export default App;










/*
export default function App() {
  return (
    <>
      <div className="">
        <div className="flex w-40 h-auto">

    <img src="https://media.discordapp.net/attachments/1083334280748466287/1115956523278008401/image.png" alt="Your Image" />


        </div>
      </div>
    </>
  );
}



export default function App() {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

	  <div className="w-40 h-fit">
        <img className="w-40 h-fit" src="https://media.discordapp.net/attachments/1083334280748466287/1115956523278008401/image.png" />
	  </div>
      </div>
    </>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> youre dumb        </p>
      </div>
      <p className="read-the-docs">
        stfu kill yourself
      </p>
    </>
  )
}

export default App
*/
