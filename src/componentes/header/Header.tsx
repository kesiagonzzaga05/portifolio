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
          <a className='S' href='#'>Fotos</a>
        </li>
        <li>
          <a className='S' href='#'>Sobre Mim</a>
        </li>
        <li>
          <a className='S' href='#'>Trabalhos</a>
        </li>
      </nav>
    </header>
  )
}
