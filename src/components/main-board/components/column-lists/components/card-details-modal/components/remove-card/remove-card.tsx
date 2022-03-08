import React, { FC } from 'react';
import styled from "styled-components";
import { ICards } from "redux/interfaces";
import { IconDelete } from "assets/icon-components/icon-delete";
import { useDispatch } from "react-redux";
import { closeModal, removeCard } from 'redux/features';

interface props {
  cardData: ICards
}

export const RemoveCard: FC<props> = ({cardData}) => {
  const dispatch = useDispatch()

  const removeCardHandler = () => {
    dispatch(removeCard(cardData))
    dispatch(closeModal())
  }

  return (
    <DeleteCard onClick={removeCardHandler}>
      <IconDelete/>
    </DeleteCard>
  )
}

const DeleteCard = styled.div`
  position: absolute;
  bottom: -7px;
  right: -7px;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  cursor: pointer;
  background: red;
`