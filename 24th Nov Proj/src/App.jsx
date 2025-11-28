import { useState } from 'react'
import './App.css'

function App() {
  // Initialize state to 7 to match the screenshot
  const [count, setCount] = useState(7)

  return (
    <>
      
      
      {/* Changed "Rohit" to "Albin" */}
      <h1>Albin's Project</h1>
      
      <div className="card">
        {/* Button displays current count */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        {/* Changed "rohit" to "Albin" */}
        <p>
          Hello this is Albin
        </p>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App