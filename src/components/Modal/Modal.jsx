import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import sprite from '../../assets/icons/sprite.svg';
import * as s from './Modal.styled';

const Modal = ({ show, handleClose, children }) => {
  const modal = document.getElementById('modal');
  const modalRef = useRef();

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

  useEffect(() => {
    if (show) {
      gsap.fromTo(
        modalRef.current,
        { x: '100%', opacity: 0 },
        {
          x: '0%',
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
        }
      );
    } else {
      gsap.to(modalRef.current, {
        y: '-100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power3.in',
      });
    }
  }, [show]);

  const handleBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      handleClose();
    }
  };

  return createPortal(
    show && (
      <s.Backdrop onClick={handleBackdrop}>
        <s.Container ref={modalRef} onClick={(e) => e.stopPropagation()}>
          <s.CloseBtn onClick={handleClose} type="button" aria-label="Close">
            <svg width={20} height={20}>
              <use href={`${sprite}#close`} />
            </svg>
            close
          </s.CloseBtn>
          {children}
        </s.Container>
      </s.Backdrop>
    ),
    modal
  );
};

export default Modal;
