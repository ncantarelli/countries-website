import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Modal from './Modal';
import { AuthContext } from '../context/AuthContext';
import { useIsAuth } from '../hooks/useIsAuth';
// import { AuthContext } from '../context/AuthContext';

function MyNavbar() {

    const { user, logout } = useContext(AuthContext);
    console.log('user :>> ', user);
    
    const allowAccess = useIsAuth();

    const [isNavbarModalOpen, setIsNavbarModalOpen] = useState(false);

    const toggleModal = () => {
        setIsNavbarModalOpen(!isNavbarModalOpen);
    };

    return (
        <nav>
            <div className="NavContainer">
                <img
                    src="/src/assets/burger-menu.svg"
                    alt="Navigation Menu"
                    onClick={toggleModal}
                    className='BurgerIcon'
                />
                <div className='LogoContainer'>
                    <NavLink to="/">
                        <img
                            src="/images/logo2.svg"
                            alt='Travel Logo'
                            className='TravelLogo'
                        />
                        <img src='/src/assets/white-logo.svg' alt='Travel Logo' className='WhiteTravelLogo'/>
                    </NavLink>
                    <div className="NavItemsDesktop">
                    {allowAccess ? <p>You are logged in!</p> : null }
                    <hr></hr>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    <NavLink to="/countries" >
                        Countries
                    </NavLink>
                    <NavLink to="/about">
                        About
                        </NavLink>
                    </div>
                    <div className="UserAreaLinksDesktop">
                    {allowAccess ? (<NavLink to="/" onClick={logout}>
                        Logout
                    </NavLink>)
                        : (<NavLink to="/login">
                            Log In
                        </NavLink>)}
                    
                    {allowAccess ? (<NavLink to="/userpage">
                            Account
                    </NavLink>)
                        : <NavLink to="/registration">
                            Sign Up
                        </NavLink>}
                    
                </div>
                </div>
            </div>
            <Modal isOpen={isNavbarModalOpen} onClose={toggleModal} />
        </nav>
    );
}

export default MyNavbar