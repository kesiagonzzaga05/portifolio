import './Contato.css'
export default function 
Contato(){
    return (
        <main className='container-contato'>
            <div className='texto'>
                <h1> Entre em Contato </h1>
                <p>Entre em contato com o serviço on-line para obter ajuda rápida e eficiente. Por meio do E-mail, Telefone ou Feedback. A equipe está pronta para atender ás suas necessidades.</p>
            <div className='contato'>
            </div>
            </div>
            <div className='formulario'>
                <p> Nome completo</p>
                <input id="link" name="Digite o seu Nome Completo" placeholder="Digite o seu Nome Completo" type="texto" />

                <p> E-mail</p>
                <input id="link" name="Digite o seu E-mail" placeholder="Digite o seu Nome Completo" type="texto" />

                <p> Assunto </p>
                <input id="link" name="Digite o seu Nome Completo" placeholder="Digite o seu Nome Completo" type="texto" />

                <input className="botao" type="button" value="Enviar" />
            </div>
            
        </main>
    )
}
