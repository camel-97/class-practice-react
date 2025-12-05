import './App.css'
import FunctionalInput from './FunctionalInput'
import ClassInput from './ClassInput'

function App() {
  return (
    <>
      <FunctionalInput name="Functional component!" />
      <div className="divider" />
      <ClassInput name="Class based component!" />
    </>
  )
}

export default App
