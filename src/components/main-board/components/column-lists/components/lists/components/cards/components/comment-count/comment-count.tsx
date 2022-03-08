import React, { FC } from 'react';
import { IconComments } from "assets/icon-components/icon-comments";
import styled from "styled-components";
import { ICards, IComment } from "redux/interfaces";
import { useSelector } from 'react-redux';
import { commentsReselect } from "redux/selectors";
import _ from 'lodash';

interface props {
  cardProp: ICards
}

export const CommentCount: FC<props> = ({cardProp}) => {
  const comments = useSelector(commentsReselect)
  const count: IComment[] = _.filter(comments,(comment: IComment) => comment.cardID === cardProp.id)

  return (
    <CommentCountStyle>
      <IconComments/>
      <p>{count.length}</p>
    </CommentCountStyle>
  )
}

const CommentCountStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35px;
  height: 20px;

  svg {
    fill: gray;
  }
`