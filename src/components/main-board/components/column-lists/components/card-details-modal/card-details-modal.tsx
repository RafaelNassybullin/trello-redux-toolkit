import React, { FC } from 'react';
import { ModalPopup } from "components/modal-popup";
import styled from "styled-components";
import { ModalCardNames } from "./components/modal-card-names";
import { ModalCardDescriptions } from "./components/modal-card-descriptions";
import { ModalComments } from "./components/modal-comments";
import { RemoveCard } from "./components/remove-card";
import { IconClose } from "assets/icon-components/icon-close";
import { useDispatch, useSelector } from "react-redux";
import { cardsReselect, columnsReselect, modalIDReselect } from "redux/selectors";
import { ICards, IColumns } from "redux/interfaces";
import _ from 'lodash';
import { closeModal } from 'redux/features';

export const CardDetailsModal: FC = () => {
  const columns = useSelector(columnsReselect)
  const cards = useSelector(cardsReselect)
  const modalCardID = useSelector(modalIDReselect)

  const dispatch = useDispatch()
  let listName: string = ''

  const closeHandler = () => {
    dispatch(closeModal())
  }

  return (
    <>
      {modalCardID && <ModalPopup>
        {_.map(cards, (card: ICards) => {
          if (card.id === modalCardID) {
            {
              _.filter(columns, (column: IColumns) => column.id === card.columnID ? listName = column.listTitle : null)
            }
            return (
              <ModalInner key={card.id}>
                <ModalTitle>
                  <div>Author: <span>{localStorage.getItem('name')}</span></div>
                  <div>list name: <span>{listName}</span></div>
                </ModalTitle>
                <ModalClose onClick={closeHandler}>
                  <IconClose/>
                </ModalClose>
                <ModalCard>
                  <ModalCardNames modalTitleCardData={card}/>
                  <ModalCardDescriptions modalDescriptionCardData={card}/>
                  <ModalComments commentsCardProps={card}/>
                </ModalCard>
                <RemoveCard cardData={card}/>
              </ModalInner>
            )
          }
        })}
      </ModalPopup>}
    </>
  )
}

const ModalInner = styled.div`
  width: 600px;
  height: 500px;
  background: white;
  color: black;
  position: relative;
`
const ModalTitle = styled.div`
  font-size: 20px;

  span {
    font-weight: 700;
    font-size: 19px;
  }
`
const ModalClose = styled.div`
  position: absolute;
  top: -3px;
  right: -12px;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #CCCCCC3d;
  }
`
const ModalCard = styled.div`

`