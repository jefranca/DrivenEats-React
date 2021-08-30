import ReactDOM from 'react-dom';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
import Rodape from './Rodape'

function App(){
    return (
        <div className="root">
            <Cabecalho />
            {tipos.map((tipo) => <Conteudo tipo={tipo}/>)}
            <Rodape />
        </div>
    )
}
const tipos=["comida","bebida","sobremesa"]


ReactDOM.render(<App/>,document.querySelector(".root"));
