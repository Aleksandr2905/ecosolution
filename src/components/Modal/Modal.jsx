import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import sprite from '../../assets/icons/sprite.svg';
import * as s from './Modal.styled';

const Modal = ({ show, handleClose, children }) => {
  const modal = document.getElementById('modal');

  useEffect(() => {
    const handleEscape = (event) => {
      if (show && event.key === 'Escape') {
        handleClose();
      }
    };

    document.body.style.overflow = show ? 'hidden' : 'auto';
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [show, handleClose]);

  const handleBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      handleClose();
    }
  };

  if (!show) {
    return null;
  }

  return createPortal(
    <s.Backdrop onClick={handleBackdrop}>
      <s.Container onClick={(e) => e.stopPropagation()}>
        <s.CloseBtn onClick={handleClose} type="button" aria-label="Close">
          <svg width={20} height={20}>
            <use href={`${sprite}#close`} />
          </svg>
          close
        </s.CloseBtn>
        {children}
      </s.Container>
    </s.Backdrop>,
    modal
  );
};

export default Modal;
