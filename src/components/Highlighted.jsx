function Texto(props) {
  const is = props.boolean;
  const condicao = is ? (
    <span style={{ backgroundColor: "red", color: "#fff" }}>Verdade</span>
  ) : (
    <span style={{ backgroundColor: "blue", color: "#000" }}>Falso</span>
  );

  return <>{condicao}</>;
}

export default Texto;
