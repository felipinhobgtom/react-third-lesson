import "./App.css";
import Condicao from "./components/Boolean";
import ChildrenComp from "./components/ChildrenComp";
import Filho from "./components/ChildrenComponent";
import Elementos from "./components/Elementos";
import Text from "./components/Highlighted";
import ImagemAlt from "./components/ImagemAlt";
import Imagens from "./components/Imagens";
import Lista from "./components/Lista";
import Remover from "./components/Remover";
import Objects from "./components/Table";

function App() {
  return (
    <main>
      <div className="cartao">
        <h2>Exercício 1</h2>
        <Lista />
      </div>

      <div className="cartao">
        <h2>Exercício 2</h2>
        <Filho />
      </div>

      <div className="cartao">
        <h2>Exercício 3</h2>
        <Condicao boolean={true} />
      </div>

      <div className="cartao">
        <h2>Exercício 4</h2>
        <Objects />
      </div>

      <div className="cartao">
        <h2>Exercício 5</h2>
        <Imagens />
      </div>

      <div className="cartao">
        <h2>Exercício 6</h2>
        <Text boolean={true} />
      </div>

      <div className="cartao">
        <h2>Exercício 7</h2>
        <Remover />
      </div>

      <div className="cartao">
        <h2>Exercício 8</h2>
        <ChildrenComp>
          <h2>Título</h2>
          <p>Parágrafo do cartao</p>
          <p>Isso aqui está sendo renderizado na children.</p>
        </ChildrenComp>
      </div>

      <div className="cartao">
        <h2>Exercício 9</h2>
        <Elementos />
      </div>

      <div className="cartao">
        <h2>Exercício 10</h2>
        <ImagemAlt />
      </div>
    </main>
  );
}

export default App;