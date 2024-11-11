import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button/button'
import { H1 } from './components/ui/H1'
import { BodyText } from './components/ui/bodyText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center h-full">
      <div className="container mx-auto">
        <div className="flex justify-center gap-10 my-10">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="h-24 animate-spin duration-10000" alt="React logo" />
          </a>
        </div>
        <div className="text-center">
          <H1>Vite + React + Ts + Tailwind + Shadcn</H1>
          <Button className="mb-4" variant="outline" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <BodyText>
            Edit <code>src/App.tsx</code> and save to test HMR
          </BodyText>
          <BodyText variant="body2">
            Click on the Vite and React logos to learn more
          </BodyText>
        </div>
      </div>
    </div>
  )
}

export default App
