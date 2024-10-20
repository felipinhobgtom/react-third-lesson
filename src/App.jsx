import './App.css'
import Condicao from './components/Boolean'
import Filho from './components/ChildrenComponent'
import Lista from './components/Lista'

function App() {

  return (
    <>
    <Lista />
    <Filho />
    <Condicao boolean={true} />
    </>
  )
}

export default App
