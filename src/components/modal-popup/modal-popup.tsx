import React, { FC, useEffect, useRef } from 'react';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { closeModal } from 'redux/features';

export const ModalPopup: FC = ({children}) => {
  const myRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch()

  const close = (event: MouseEvent) => {
    if (myRef.current && !myRef.current.contains(event.target as HTMLDivElement)) {
      dispatch(closeModal())
    }
  }

  useEffect(() => {
    document.addEventListener('click', close, true);
    return () => {
      document.removeEventListener('click', close, true);
    };
  }, []);


  return (
    <Overlay>
      <Popup ref={myRef}>
        {children}
      </Popup>
    </Overlay>
  )
}
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgb(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  display: grid;
  place-items: center;
  z-index: 25;
`
const Popup = styled.div`
  position: relative;
  padding: 20px 30px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: white;
`