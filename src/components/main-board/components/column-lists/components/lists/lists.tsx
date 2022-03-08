import React, { FC, useState } from 'react';
import styled from "styled-components";
import { IColumns } from "redux/interfaces";
import { InputListTitle } from "./components";
import { Cards } from "./components";
import { AddCard } from "./components";
import { IconThreeDots } from "assets/icon-components/icon-three-dots";
import { useDispatch } from 'react-redux';
import { removeList } from 'redux/features';

interface props {
  listsDataProps: IColumns
}

export const Lists: FC<props> = ({listsDataProps}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const dispatch = useDispatch()

  const removeHandler = () => dispatch(removeList(listsDataProps))

  return (
    <>
      <List>
        <ListTitleWrap>
          <InputListTitle listTitleData={listsDataProps}/>
          <ListMenu onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen&&<RemoveList>
              <RemoveListBtn onClick={removeHandler}>Удалить</RemoveListBtn>
            </RemoveList>}
            <IconThreeDots/>
          </ListMenu>
        </ListTitleWrap>
        <Cards cardsDataProps={listsDataProps}/>
        <AddCard listDataAddCardProps={listsDataProps}/>
      </List>
    </>
  )
}

const List = styled.div`
  position: relative;
  width: 300px;
  background: var(--list-bg);
  border-radius: 3px;
  color: black;
  margin: 5px;
  padding: 7px 5px 40px 5px;
`
const ListMenu = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background: #CCCCCC;
  }

  svg {
    width: 15px;
  }
`
const RemoveList = styled.div`
  position: absolute;
  top: 23px;
  left: 16px;
  width: 130px;
  height: 43px;
  background: #FFFFFF3d;
  backdrop-filter: blur(15px);
  z-index: 3;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 7px;
  border-radius: 3px;

`
const RemoveListBtn = styled.button`
  background: red;
  color: white;
  padding: 5px 15px;
  border-radius: 7px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: crimson;
  }
`

const ListTitleWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
