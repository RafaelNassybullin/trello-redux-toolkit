import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICards } from "redux/interfaces";
import _ from 'lodash';
import { cards } from "data";

interface ICardSliceState {
  cards: ICards[]
  modalCardID: string
}

const initialCardState: ICardSliceState = {
  cards: [...cards],
  modalCardID: ''
}

export const cardSlice = createSlice({
  name: 'card',
  initialState: initialCardState,
  reducers: {
    addCard: (state, action: PayloadAction<ICards>) => {
      state.cards.push(action.payload)
    },
    removeCard: (state, action: PayloadAction<ICards>) => {
      state.cards = _.filter(state.cards,(card: ICards) => card.id !== action.payload.id)
    },
    changeTitle: (state, action: PayloadAction<{ cardTitleValue: string, modalTitleCardData: ICards }>) => {
      _.map(state.cards, (card: ICards) => card.id === action.payload.modalTitleCardData.id ? card.cardTitle = action.payload.cardTitleValue : null)
    },
    changeDescription: (state, action: PayloadAction<{ descriptionValue: string, modalDescriptionCardData: ICards }>) => {
      _.map(state.cards, (card: ICards) => card.id === action.payload.modalDescriptionCardData.id ? card.cardDescription = action.payload.descriptionValue : null)
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.modalCardID = action.payload
    },
    closeModal: (state) => {
      state.modalCardID = ''
    }
  }
})

export const {
  addCard,
  removeCard,
  changeTitle,
  changeDescription,
  openModal,
  closeModal
} = cardSlice.actions

export const cardReducer = cardSlice.reducer