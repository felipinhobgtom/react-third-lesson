function Parent(props){
    const item = props.item
    return <h3>{item}</h3>
}

function Filho(){

    return <Parent item='Este h3 está sendo alterado pelo componente filho.'/>
}

export default Filho