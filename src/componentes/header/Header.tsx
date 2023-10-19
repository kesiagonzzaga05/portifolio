import './Header.css'
import { Link } from 'react-router-dom'
function Header(){
    return(
        <header>
            <div>
                <Link to="/"><img src='/k.logo.png'/></Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Página Inicial</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Página Sobre</Link>
                    </li>
                    <li>
                        <Link to="/noticias">Página de Notícias</Link>
                    </li>
                    <li>
                        <Link to="/contato">Página de Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header