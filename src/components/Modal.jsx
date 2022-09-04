import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0;
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
  min-width: 400px;
`;

function Modal({ isOpen, setIsOpen, children }) {
  return (
    isOpen && (
      <ModalBackground onClick={() => setIsOpen(false)}>
        <ModalBody onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Hide Modal
          </button>
          {children}
        </ModalBody>
      </ModalBackground>
    )
  );
}

export default Modal;
