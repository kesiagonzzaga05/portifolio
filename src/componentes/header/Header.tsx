import './Header.css'
export default function
  Header() {
  return (
    <header>
      <div className="margin">

          <img className="logo1" src="/k.logo.png" alt=""/>

      </div>
      <nav className='navbar'>
        <li>
          <a className='S' href='#'>Home</a>
        </li>
        <li>
          <a className='S' href='#'>Notícia</a>
        </li>
        <li>
          <a className='S' href='#'>Sobre</a>
        </li>
        <li>
          <a className='S' href='#'>Contato</a>
        </li>
      </nav>
    </header>
  )
}
