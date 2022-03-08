import React, { FC } from 'react';
import { AddList, CardDetailsModal, Lists } from "./components";
import styled from "styled-components";
import { IColumns } from "redux/interfaces";
import { useSelector } from "react-redux";
import { columnsReselect } from "redux/selectors";
import _ from 'lodash';

export const ColumnLists: FC = () => {
  const authorName: string | null = localStorage.getItem('name');
  const columns = useSelector(columnsReselect)

  return (
    <>
      {authorName &&
      <>
        <AuthorTitle>{authorName}</AuthorTitle>
        <ListWrap>
          {_.map(columns, (column: IColumns) => <Lists key={column.id} listsDataProps={column}/>)}
          <AddList/>
        </ListWrap>
        <CardDetailsModal/>
      </>}
    </>
  )
}

const AuthorTitle = styled.h1`
  color: white;
  font-size: 3rem;
`
const ListWrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`

