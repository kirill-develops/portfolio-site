import React from 'react';
import styled from 'styled-components';
import media from '../styles/mediaQueries';

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
  backdrop-filter: blur(3px);
  margin: 0;
`;

const ModalBody = styled.div`
  background-color: #f8f8ff;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1), 0 4px 30px rgba(0, 0, 0, 0.15),
    0 1rem 1rem rgba(0, 0, 0, 0.275);
  border-radius: 6px;
  position: relative;
  width: 75%;
  min-width: 460px;
  margin: 5% auto;
  padding: 20px;

  ${media.tabletPortrait`
    width:40%;
    margin: 10% auto;
  `}

  ${media.tabletLandscape`
    width:55%;
    margin: 10% auto;
  `}

  ${media.laptop`
    width:40%;
  `}
`;

const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  aspect-ratio: 1;
  cursor: pointer;

  ${media.mobileLandscape`
    min-width: 44px;
  `}

  ${media.tabletLandscape`
    min-width: unset;
  `}
`;

function Modal({ isOpen, setIsOpen, children }) {
  return (
    isOpen && (
      <ModalBackground onClick={() => setIsOpen(false)}>
        <ModalBody onClick={(e) => e.stopPropagation()}>
          <CloseButton
            type="button"
            onClick={() => setIsOpen(false)}
          >
            X
          </CloseButton>
          {children}
        </ModalBody>
      </ModalBackground>
    )
  );
}

export default Modal;
