import React from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
const Modal = () => {
  const { isModalClose, modal } = useGlobalContext();
  return (
    <div className={`${modal ? 'modal-overlay show-modal' : 'modal-overlay'} `}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button onClick={isModalClose} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
