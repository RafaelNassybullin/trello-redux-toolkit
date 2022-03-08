import { RootState } from "redux/store";
import { createSelector } from "reselect";

const columnSelect = (state: RootState) => state.column.columns;
const cardSelect = (state: RootState) => state.card.cards;
const commentSelect = (state: RootState) => state.comment.comments;
const modalIDSelect = (state: RootState) => state.card.modalCardID

export const columnsReselect = createSelector(columnSelect, (columns) => {
  return columns
})
export const cardsReselect = createSelector(cardSelect, (cards) => {
  return cards
})
export const commentsReselect = createSelector(commentSelect, (comments) => {
  return comments
})
export const modalIDReselect = createSelector(modalIDSelect, (modalCardID) => {
  return modalCardID
})



