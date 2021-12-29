import React, { useRef } from 'react';

const Modal = ({ children, modalRef }) => {
  const modalContentRef = useRef();

  const handleClickModal = (e) => {
    const { current } = modalContentRef;
    current.classList.add('animate__slideOutLeft');
    setTimeout(() => {
      current.classList.remove('animate__slideOutLeft');
      e.target.classList.remove('modal-visible');
      modalRef.current.classList.add('modal-hidden');
    }, 1000);
  };
  return (
    <div
      className='modal modal-hidden'
      onClick={handleClickModal}
      ref={modalRef}
    >
      <div
        className='modal-content animate__animated animate__zoomIn'
        ref={modalContentRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
