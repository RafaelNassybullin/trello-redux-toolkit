import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "redux/interfaces";
import { comments } from "data";
import _ from 'lodash'

interface ICommentSliceState {
  comments: IComment[]
}

const initialCommentState: ICommentSliceState = {
  comments: [...comments],
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState: initialCommentState,
  reducers: {
    removeComment: (state, action: PayloadAction<IComment>) => {
      state.comments = _.filter(state.comments,(comment:IComment) => comment.id !== action.payload.id)
    },
    addComment: (state, action: PayloadAction<IComment>) => {
      state.comments.unshift(action.payload)
    }
  }
})

export const {removeComment, addComment} = commentSlice.actions
export const commentReducer = commentSlice.reducer