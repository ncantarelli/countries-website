import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useIsAuth } from '../hooks/useIsAuth';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
    
    if (!isOpen) {
        return null; // Renders nothing if the modal is closed
    };
 
    const { user, logout } = useContext(AuthContext);
    console.log('user :>> ', user);
    
    const allowAccess = useIsAuth();

    return (
        <div className="modal">
            <button className="CloseButton" onClick={onClose}>
                <img src="../src/assets/closing-button.svg" alt="Close" />
            </button>
            <div className="modal-content">
                <div className="NavItems">
                    {allowAccess ? (<p>You are logged in!</p>) : null}
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
                    {allowAccess ? (<NavLink to="/" onClick={logout}>
                        Logout
                    </NavLink>)
                        : (<NavLink to="/login" onClick={onClose}>
                            Log In
                        </NavLink>)}
                    
                    {allowAccess ? (<NavLink to="/userpage" onClick={onClose}>
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