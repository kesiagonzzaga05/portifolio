import './Footer.css'
import { FacebookLogo, InstagramLogo,TiktokLogo,TwitterLogo} from "phosphor-react";
export default function
  Footer() {
  return (
    <footer>
      <nav className='nav'> 
        <div className='container'>
            <img className="logo2" src="/k.logo.png" alt=""/>
       </div>
        <li>
          <a className='A' href='#'>Produtos</a>
          <h3 className='B'> Dicas Moda </h3>
          <h3 className='B'> Fotos Viagens </h3>
          <h3 className='B'> Projetos </h3>
        </li>
        <li>
          <a className='A' href='#'>Sobre</a>
           <h3 className='B'>Trabalhos </h3>
          <h3 className='B'> Redes Sociais </h3>
          <h3 className='B'> Sobre Mim</h3>
        </li>
        <li>
          <a className='A' href='#'>Contato</a>
           <h3 className='B'>E-mail</h3>
          <h3 className='B'> Telefone </h3>
          <h3 className='B'> Segurança </h3>
        </li>
        <li>
          <a className='A' href='#'>Serviços</a>
           <h3 className='B'>Termos e Permissões </h3>
          <h3 className='B'> Declaração e tecnologia</h3>
          <h3 className='B'> Cookie Preferencias</h3>
        </li>
      </nav>
      <div className='logo'>
      <FacebookLogo size={30} weight="bold"/>
      <InstagramLogo size={30} weight="bold"/>
      <TiktokLogo size={30} weight="bold"/>
      <TwitterLogo size={30} weight="bold"/>
      </div>
      
    </footer>
  )
}

