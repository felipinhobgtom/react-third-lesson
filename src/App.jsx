import './App.css'
import Condicao from './components/Boolean'
import ChildrenComp from './components/ChildrenComp'
import Filho from './components/ChildrenComponent'
import Elementos from './components/Elementos'
import Text from './components/Highlighted'
import ImagemAlt from './components/ImagemAlt'
import Imagens from './components/Imagens'
import Lista from './components/Lista'
import Remover from './components/Remover'
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
    <Remover />
    <ChildrenComp>
        <h2>Título</h2>
        <p>Parágrafo do card</p>
        <p>Isso aqui está sendo renderizado na children.</p>
    </ChildrenComp>
    <Elementos />
    <ImagemAlt />
    </>
  )
}

export default App