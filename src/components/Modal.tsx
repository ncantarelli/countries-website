import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
    
    if (!isOpen) {
        return null; // Renders nothing if the modal is closed
    };
 
    const { user, setUser, logout } = useContext(AuthContext);
    console.log('user :>> ', user);
    
    const login = () => {
        setUser({
            userName: "Nico",
            email: "nico@email.com"
        });
    };

    return (
        <div className="modal">
            <button className="CloseButton" onClick={onClose}>
                <img src="../src/assets/closing-button.svg" alt="Close" />
            </button>
            <div className="modal-content">
                <div className="NavItems">
                    {user ? (<p>Hello {user?.userName}!</p>) : null}
                    <hr></hr>
                    <NavLink to="/" onClick={onClose}>
                        Home
                    </NavLink>
                    <NavLink to="/countries" onClick={onClose}>
                        Countries
                    </NavLink>
                    <NavLink to="/about" onClick={onClose}>
                        About
                    </NavLink>
                </div>
                <hr></hr>
                <div className="UserAreaLinks">
                    {user ? (<NavLink to="/" onClick={logout}>
                        Logout
                    </NavLink>)
                        : (<NavLink to="/login" onClick={login}>
                            Log In
                        </NavLink>)}
                    
                    {user ? (<NavLink to="/userpage" onClick={onClose}>
                            Account
                    </NavLink>)
                        : <NavLink to="/registration" onClick={onClose}>
                            Sign Up
                        </NavLink>}
                    
                </div>
            </div>
        </div>
    );
}

export default Modal;