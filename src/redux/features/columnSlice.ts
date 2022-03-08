import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IColumns } from "redux/interfaces";
import { columns } from "data";
import _ from 'lodash';

interface IColumnSliceState {
  columns: IColumns[]
}

const initialState: IColumnSliceState = {
  columns: [...columns]
}

export const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    changeListTitle: (state, action: PayloadAction<{ listTitleData: IColumns, inputValue: string }>) => {
      _.map(state.columns, (column: IColumns) => column.id === action.payload.listTitleData.id ? column.listTitle = action.payload.inputValue : null)
    },
    addList: (state, action: PayloadAction<IColumns>) => {
      state.columns.push(action.payload)
    },
    removeList: (state, action: PayloadAction<IColumns>) => {
      state.columns = _.filter(state.columns,(column: IColumns) => column.id !== action.payload.id)
    }
  }
})

export const {changeListTitle, addList, removeList} = columnSlice.actions
export const columnReducer = columnSlice.reducer

