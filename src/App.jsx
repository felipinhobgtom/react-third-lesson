import './App.css'
import Condicao from './components/Boolean'
import Filho from './components/ChildrenComponent'
import Text from './components/Highlighted'
import Imagens from './components/Imagens'
import Lista from './components/Lista'
import Objects from './components/Table'

function App() {

  return (
    <>
    <Lista />
    <Filho />
    <Condicao boolean={true} />
    <Objects />
    <Imagens />
    <Text boolean={true}/>
    </>
  )
}

export default App