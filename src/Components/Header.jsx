import '../Styles/Components/header.css'
import '../Styles/Components/nav.css'
import logo from '../images/header/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import BntNav from './BntNav'

const Header = () =>{
    return(
        <div>
            <nav className='Nav'>
             <img src={logo} alt=""/>
             <BntNav/>
            <ul className='s'>    
                <AnchorLink href='#about'><li>Home</li></AnchorLink>
                <AnchorLink href='#container'><li>Receitas</li></AnchorLink>
                <AnchorLink href='#author'><li>Contato</li></AnchorLink>
            </ul>
            </nav>
            <section className='links'>
            <ul>    
                <AnchorLink href='#about'><li>Home</li></AnchorLink>
                <AnchorLink href='#container'><li>Receitas</li></AnchorLink>
                <AnchorLink href='#author'><li>Contato</li></AnchorLink>
            </ul>
            </section>
        <header className='header'>
            <div className='title'>
                <h1>NaturalMed</h1>
                <p>Compilado das melhores receitas naturais selecionadas por sintomas</p>
            </div>
        </header>
        </div>
    )
}

export default Header;