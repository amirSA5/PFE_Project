import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbarusers.css'



function Navbarusers(){
    const [click,setClick] = useState(false);
    const [dropdown, setDropdown]= useState(false);

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
                <Link to='/users' className='navbar-logo'>
                   SOTER <i className='fab fa-firstdraft' /> 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/users' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/ListeClients' className='nav-links' onClick={closeMobileMenu}>
                            Clients List 
                        </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='/AddClient' className='nav-links' onClick={closeMobileMenu}>
                            Add Clients
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/FilesLists' className='nav-links' onClick={closeMobileMenu}>
                            Files List 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Process' className='nav-links' onClick={closeMobileMenu}>
                            Process  
                        </Link>
                        <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            <i class="fas fa-sign-out-alt"></i>
                        </Link>
                    </li>
                    
                    </li>
                    
                    
                </ul>
               
            </nav>
        </>
    )
}

export default Navbarusers