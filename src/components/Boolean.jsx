function Condicao(props){

    const isVisible = props.boolean
    const verificacao = isVisible ? 'Essa condição é verdadeira.' : ''

    return <h3>{verificacao}</h3>
}

export default Condicao