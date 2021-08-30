import React from "react"

let pedido=[];
export default function Opcao({opcao}){

    const[selecionado, setSelecionado] = React.useState("");
    const[number, setNumber] = React.useState(0);
    let itens;
    

    return(
        <div onClick={() => selecionar()} className ={`opcao ${selecionado}`}>
            <img src={opcao.img}/>
            <div className="informacoes">
                <h2>{opcao.prato}</h2>
                <p>{opcao.descricao}</p>
                <h3>{opcao.valor}</h3>
            </div>
                <Quantidade />
        </div>
    ) 
   
    function selecionar() {
    
        if (selecionado === "") {
          setSelecionado("borda-selecionada");
          setNumber(1);
          itens={prato:opcao.prato, valor:opcao.valor}
          salvaritem(itens)
        } 
      }

      function Quantidade(){
        if(number>0){
          return(
            <div className="quantidade">
                          <span id="overlay" onClick={()=> setNumber(number+1)}>+</span>
                          <span>{number}</span>
                          <span onClick={diminuirnumero}>-</span>
                      </div>
          )
        } return("")
      }
      function diminuirnumero(){
        setNumber(number-1);
        if(number === 1){
          setSelecionado("")
        }
      }
}
function salvaritem(item){
  pedido.push(item)
  console.log(pedido)
}




    

