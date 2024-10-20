function Lista(props) {
  return (
    <>
      <tr style={{border: '1px solid #000'}}>
        <th style={{border: '1px solid #000'}}>{props.nome}</th>
        <th style={{border: '1px solid #000'}}>{props.idade}</th>
      </tr>
    </>
  );
}

function Objects() {
  const caracteristicas = [
    { nome: "Felipe", idade: 17 },
    { nome: "João", idade: 20 },
    { nome: "Miguel", idade: 10 },
    { nome: "Carlos", idade: 30 },
  ];

  return (
    <>
      <table style={{border: '1px solid #000'}}>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
        </tr>
        {caracteristicas.map((caracteristicas) => (
          <Lista nome={caracteristicas.nome} idade={caracteristicas.idade} />
        ))}
      </table>
    </>
  );
}

export default Objects;