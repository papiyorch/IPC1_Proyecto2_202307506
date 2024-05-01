import {NavLink} from 'react-router-dom'
function Header(){
    return(
        <header>
            <nav>
                <u1>
                    <li>
                       <NavLink to='home' className='link' exact>Home</NavLink> 
                    </li>
                    <l1>
                        <NavLink to='about' className='link' exact>About</NavLink> 
                    </l1>
                    <l1>
                        <NavLink to='contact' className='link' exact>Contact</NavLink> 
                    </l1>
                </u1>
                <u1>
                    <l1>
                        <NavLink to='login' className='link' exact>Login</NavLink> 
                    </l1>
                    
                </u1>
            </nav>
        </header>
    
    )
       
}
export default Header;