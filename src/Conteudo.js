import Opcao from "./Opcao"
export default function Conteudo({tipo}){
    let comidas= [{img:"imgs/yinyang.png", prato:"Frango Yin Yang", descricao:"Um pouco de batata, um pouco de salada",valor:"R$ 24,90"},
    {img:"imgs/pratododia.jpg", prato:"Prato do Dia", descricao:"Arroz, Feijão, Carninha e salada",valor:"R$ 14,90"},
    {img:"imgs/feijoada.jpg", prato:"Feijoada da Driven", descricao:"Feijoda Especial",valor:"R$ 27,90"},
    {img:"imgs/feijoadafamilia.jpg", prato:"Feijoada Familia", descricao:"Feijoada Especial que serve até 4 pessoas",valor:"R$ 94,90"},
    {img:"imgs/pratokids.jpeg", prato:"Prato Kids", descricao:"Prato decorado para as crianças",valor:"R$ 22,90"},
    {img:"imgs/salmao.jpg", prato:"Salmão", descricao:"Salmão com purê de Ervilha",valor:"R$ 74,90"},
    {img:"imgs/burguer.jpg", prato:"Burguer da Casa", descricao:"Hambúrguer da casa, cheio de coisa.",valor:"R$ 44,90"}];

    let bebidas=[{img:"imgs/coquinha.png", prato:"Coquinha Gelada", descricao:"Lata 350ml",valor:"R$ 6,90"},
    {img:"imgs/mikes.jfif", prato:"Mike's", descricao:"Mike's",valor:"R$ 10,90"},
    {img:"imgs/canelinha.jpg", prato:"Canelinha", descricao:"Bebida alcoolica sabor canela",valor:"R$ 5,90"},
    {img:"imgs/tequila.png", prato:"Tequila(shot)", descricao:"Shot de Tequila",valor:"R$ 13,90"},
    {img:"imgs/tequila.png", prato:"Tequila (Garrafa)", descricao:"Garrafa de Tequila",valor:"R$ 140,90"}];

    let sobremesas= [{img:"imgs/pudim 1.png", prato:"Pudim", descricao:"Apenas Pudim",valor:"R$ 14,90"},
    {img:"imgs/brigadeiro.jfif", prato:"Caixa Brigadeiro", descricao:"Caixa com 4 brigadeiros",valor:"R$ 13,99"},
    {img:"imgs/bolocenoura.jpg", prato:"Bolo de Cenoura", descricao:"Com calda de chocolate",valor:"R$ 22,90"},
    {img:"imgs/bolofesta.jpg", prato:"Bolo Festa", descricao:"Bolo Festa",valor:"R$ 54,90"},
    {img:"imgs/cupcake.jpg", prato:"Cupcake", descricao:"Um simples e saboroso Cupcake",valor:"R$ 13,90"},
    {img:"imgs/redvelvet.jpeg", prato:"Bolo Red Velvet", descricao:"Bolo Red Velvet",valor:"R$ 74,90"}];

    if(tipo === "comida"){
        return(
            <div className="conteudo">
                <h1>
                    Primeiro, seu prato"
                </h1>
                <div className="opcoes {tipo}">
                    {comidas.map((comidas) => <Opcao opcao={comidas}/>)}
                </div>
            </div>
            )
    }else if(tipo === "bebida"){
        return(
            <div className="conteudo">
                <h1>
                    Agora, sua bebida
                </h1>
                <div className="opcoes {tipo}">
                    {bebidas.map((bebidas) => <Opcao opcao={bebidas}/>)}
                </div>
            </div>
            )
    }
    return(
        <div className="conteudo">
                <h1>
                    Por fim, sua sobremesa
                </h1>
                <div className="opcoes {tipo}">
                    {sobremesas.map((sobremesas) => <Opcao opcao={sobremesas}/>)}
                </div>
            </div>
    )
}