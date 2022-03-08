import { ICards, IColumns, IComment } from "redux/interfaces";

export const columns: IColumns[] = [
  {
    id: 'columns-1',
    listTitle: 'TODO',
  },
  {
    id: 'columns-2',
    listTitle: 'In Process',
  },
  {
    id: 'columns-3',
    listTitle: 'Testing',
  },
  {
    id: 'columns-4',
    listTitle: 'Completed',
  }
]

export const cards: ICards[] = [
  {
    id: 'card-1',
    columnID: 'columns-1',
    cardTitle: 'Приготовить ужин',
    cardDescription: 'Описание',
  },
  {
    id: 'card-2',
    columnID: 'columns-2',
    cardTitle: 'Карточкаа',
    cardDescription: 'Описание',
  },
  {
    id: 'card-3',
    columnID: 'columns-1',
    cardTitle: 'карточка из 1 колонки',
    cardDescription: 'Описание',
  },
  {
    id: 'card-4',
    columnID: 'columns-2',
    cardTitle: 'карточка из 2 колонки',
    cardDescription: 'Описание',
  },
  {
    id: 'card-5',
    columnID: 'columns-3',
    cardTitle: 'карточка из 3 колонки',
    cardDescription: 'Описание',
  },
  {
    id: 'card-6',
    columnID: 'columns-4',
    cardTitle: 'карточка из 4 колонки',
    cardDescription: 'Описание',
  },
]

export const comments: IComment[] = [
  {
    id: 'comment-1',
    cardID: 'card-1',
    commentText: 'Коментарий-1'
  },
  {
    id: 'comment-2',
    cardID: 'card-1',
    commentText: 'Коментарий-2'
  },
  {
    id: 'comment-3',
    cardID: 'card-4',
    commentText: 'Коментарий-3'
  },
  {
    id: 'comment-4',
    cardID: 'card-4',
    commentText: 'Коментарий-4'
  }
]