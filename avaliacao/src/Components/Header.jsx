import "/src/CSS/Header.css"

function Header () {
    return (
    <header className="header-main">
        <nav className="navbar-main">
            <h1 className="logo">🍲Restaurante Popular Saudável</h1>
            <ul className="list-style">
               <li>Início</li>
               <li>Vantagens</li>
               <li>Cardápio</li>
               <li>Sobre Nós</li>
               <li>Localização</li>
               <li>Contato</li>
            </ul>
        </nav>
    </header>
    )
}
export default Header;