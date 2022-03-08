import React, { FC } from 'react';
import { ICards, IColumns } from "redux/interfaces";
import styled from "styled-components";
import { CommentCount } from './components';
import { useDispatch, useSelector } from "react-redux";
import { cardsReselect } from "redux/selectors";
import _ from 'lodash';
import { openModal } from 'redux/features';

interface props {
  cardsDataProps: IColumns
}

export const Cards: FC<props> = ({cardsDataProps}) => {
  const cards = useSelector(cardsReselect)

  const dispatch = useDispatch()

  const handleCard = (card: ICards) => {
    dispatch(openModal(card.id))
  }

  return (
    <>
      {
        _.map(cards,(card: ICards) => (
          cardsDataProps.id === card.columnID &&
          <React.Fragment key={card.id}>
            <Card onClick={() => handleCard(card)}>
              <CardText>{card.cardTitle}</CardText>
              <CommentCount cardProp={card}/>
            </Card>
          </React.Fragment>
        ))
      }
    </>
  )
}

const Card = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 3px;
  background: white;
  margin: 8px 0;
  box-shadow: 0 0 7px #CCCCCC;
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  &:hover {
    background: #40E3B5;
    color: white;
  }
`
const CardText = styled.p`

`
