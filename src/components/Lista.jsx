function Item(props){

    return <li>Periférico: {props.item}</li>
}

function Lista(){

    const itens = [
        'Mouse',
        'Teclado',
        'Microfone',
        'Câmera'
    ]

    return(
        <ul>
            <h3>Loja de periféricos</h3>
            {itens.map((itens) => <Item item = {itens} />)}
        </ul>
    )
}

export default Lista