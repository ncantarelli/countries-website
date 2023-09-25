import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Modal from './Modal';
// import { AuthContext } from '../context/AuthContext';

function MyNavbar() {

    const [isNavbarModalOpen, setIsNavbarModalOpen] = useState(false);

    const toggleModal = () => {
        setIsNavbarModalOpen(!isNavbarModalOpen);
    };

    return (
        <nav>
            <div className="NavContainer">
                <img
                    src="../src/assets/burger-menu.svg"
                    alt="Navigation Menu"
                    onClick={toggleModal}
                    className='BurgerIcon'
                />
                <div className='LogoContainer'>
                    <NavLink to="/">
                        <img
                            src="../src/assets/logo.svg"
                            alt='Travel Logo'
                            className='TravelLogo'
                        />
                    </NavLink>
                </div>
            </div>
            <Modal isOpen={isNavbarModalOpen} onClose={toggleModal} />
        </nav>
    );
}

export default MyNavbar