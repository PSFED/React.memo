import { useCallback, useState } from 'react'
import './App.css'
import ParagraphOutput from './components/Output/ParagraphOutput'
import Button from './components/UI/Button'

function App() {
  const [show, setShow] = useState(false)
  const [allow, setAllow] = useState(false)

  const showHandler = useCallback(() => {
    if (allow) {
      setShow((prevState) => !prevState)
    }
  }, [allow])

  const allowHandler = useCallback(() => {
    setAllow((prevState) => !prevState)
  }, [])

  return (
    <div className="app">
      <h1>React под Капотом</h1>
      <ParagraphOutput isShown={show} />
      <Button onClick={allowHandler}>Activale the button</Button>
      <Button onClick={showHandler}>Show/Close</Button>
    </div>
  )
}

export default App
