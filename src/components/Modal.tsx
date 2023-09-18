import React from 'react';
import { NavLink } from 'react-router-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) {
    return null; // Render nothing if the modal is closed
  }

    return (
        <div className="modal">
            <button className="CloseButton" onClick={onClose}>
                 <img src="../src/assets/closing-button.svg" alt="Close" />
            </button>
            <div className="modal-content">
                <div className="NavItems">
                    <NavLink to="/home" onClick={onClose}>
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
                    <NavLink to="login" onClick={onClose}>
                        Log In
                    </NavLink>
                    <NavLink to="registration" onClick={onClose}>
                        Sign Up
                    </NavLink>
                </div>
            </div>
        </div>
  );
}

export default Modal;