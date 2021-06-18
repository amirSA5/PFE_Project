import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Navbar.css'
import Dropdown from './Dropdown'



function Navbar(){
    const [click,setClick] = useState(false);
    const [dropdown, setDropdown]= useState(false);
    const history = useHistory();

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };


    return(
        <>
            <nav className='navbar'>
                <Link to='/admin' className='navbar-logo'>
                   SOTER <i className='fab fa-firstdraft' /> 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/admin' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/ListeUsers' className='nav-links' onClick={closeMobileMenu}>
                            Users List 
                        </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='/AjouterUser' className='nav-links' onClick={closeMobileMenu}>
                            Add Users
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/FilesList' className='nav-links' onClick={closeMobileMenu}>
                            Files List 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/ClientsList' className='nav-links' onClick={closeMobileMenu}>
                            Clients List
                        </Link>
                        <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                            <i  class="fas fa-sign-out-alt"></i>
                        </Link>
                    </li>
                    </li>
                    
                    
                </ul>
               
            </nav>
        </>
    )
}

export default Navbar