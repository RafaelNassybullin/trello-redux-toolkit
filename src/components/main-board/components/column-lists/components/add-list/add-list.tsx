import React, { FC } from 'react';
import { v4 as uuidv4 } from "uuid";
import { AddListBtnUI } from "ui/add-list-btn/add-list-btn";
import { useDispatch } from "react-redux";
import { addList } from 'redux/features';

export const AddList: FC = () => {
  const dispatch = useDispatch()
  const addListHandler = () => dispatch(addList({id: uuidv4(), listTitle: 'New List'}))

  return (
    <div onClick={addListHandler}>
      <AddListBtnUI>
        + Add a list...
      </AddListBtnUI>
    </div>
  )
}


