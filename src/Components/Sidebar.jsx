import {NavLink} from  'react-router-dom'
import '../Styles/Components/sidebar.css'

const Sidebar = () =>{
    return(
        <ul className='sidebar' id='about'>
            <li className='sidebar_link'>
                <NavLink exact to='/'>
                     Sobre
                </NavLink>
            </li>
            <li className='sidebar_link'>
                <NavLink  to='/pagelinks'> 
                    Dicas e links
                </NavLink>
            </li>
        </ul>
    )
}

export default Sidebar