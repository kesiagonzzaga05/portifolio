import { useState } from "react";
import './Projetos.css'
import Projeto from "../projeto/Projeto";
type ProjetosType = {
    id: number,
    titulo:string,
    sinopse:string,
    imagem:string
}
export default function Projetos(){
    const [texto,setTexto] = useState("")

    const projetos:ProjetosType[] = [
        {
            id:1,
            titulo:"Projeto CCM",
            sinopse:" O projeto foi desenvolvido presencialmente para e com estudantes do IFMS, por meio de palestras e vivências. Integrou a Comissão Organizadora servidores(as) e estudantes do Projeto de Extensão Manifestações da Cultura Corporal de Movimento, coordenado pela professora Catia Silvana da Costa. Clique para ver os projetos!",
            imagem:"/img4.jpeg"
        },
        {
            id:2,
            titulo:"FeciNavi",
            sinopse:" O IFMS, promove as Feiras de Ciência e Tecnologia para a apresentação de trabalhos dos alunos. Os eventos fazem parte da programação da Semana de Ciência e Tecnologia. Clique para ver meu projeto!",
            imagem:"/img13.png"
        },
        {
            id:3,
            titulo:"Trabalhos Acadêmicos",
            sinopse:"Todos os trabalhos acadêmicos realizados por mim e desenvolvidos com a linguagem de programação Html, JavaScript. Clique para ver meus projetos!",
            imagem:"/img3.png"
        },
        {
            id:4,
            titulo:"Viagem Técnica",
            sinopse:"Desde pequena sempre quis dirigir caminhão, então realizei meu sonho trabalhando na CCR MS como guincho",
            imagem:"/img12.png"
        },
    
    ]
    //A função recebe um atributo chamado e de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <>
            <div className="pesquisa">
                
                <h2>Buscar Trabalhos</h2>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'> {texto}</p>
                </div>
            </div>
            <main className="content-main">
            {projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto.toLowerCase()))
            .map((projeto:ProjetosType)=>
                    <Projeto key={projeto.id} 
                           titulo={projeto.titulo} 
                           sinopse={projeto.sinopse} 
                           imagem={projeto.imagem}
                    />
                    )
                }
            </main>
        </>
    )
}
      