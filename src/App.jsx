import { useState } from 'react'
import Main from './assets/components/main/main'
import './App.css'

function App() {

  const [obj, setObj] = useState({
    credit: 0,
    total: 0,
  })

  return (
    <>
      <body>
        <header className='header'>
          <h1 id='title'>Banana Bank</h1>
        </header>
        <main>
          <Main
            obj={obj}
            setObj={setObj}
          />
        </main>
      </body>
    </>
  )
}

export default App
