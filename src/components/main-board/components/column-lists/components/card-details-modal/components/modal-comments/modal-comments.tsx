import React, { FC, useState } from 'react';
import { ICards, IComment } from "redux/interfaces";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { commentsReselect } from "redux/selectors";
import { addComment, removeComment } from 'redux/features';
import _ from 'lodash';
import { Field, FieldInputProps, Form } from 'react-final-form';
import { FormApi } from "final-form";

interface props {
  commentsCardProps: ICards
}

export const ModalComments: FC<props> = ({commentsCardProps}) => {
  const [addCommentOpen, setAddCommentOpen] = useState(false);

  const comments = useSelector(commentsReselect)
  const dispatch = useDispatch()

  const removeHandler = (comment: IComment) => {
    const commentID = comment.id;
    dispatch(removeComment({ commentID }))
  }

  const addCommenHandler = (commentValue: string, form: FormApi<FormData>) => {
    setAddCommentOpen(!addCommentOpen)

    if (commentValue) {
      dispatch(addComment({id: uuidv4(), cardID: commentsCardProps.id, commentText: commentValue}))
    }
    form.reset()
  }

  return (
    <>
      <CommentsTitle>Comments</CommentsTitle>
      <Form
        onSubmit={(value: FormData, form: FormApi<FormData>) => addCommenHandler(String(Object.values(value)), form)}>
        {({handleSubmit}) => (
          <CommentsAddWrap onSubmit={handleSubmit}>
            <Field name='commentsFieldName'>
              {({input}: FieldInputProps<InputEvent>) => (
                <CommentsInput
                  {...input}
                  type="text"
                  placeholder={'comment'}
                />
              )}
            </Field>
            <AddComment onClick={handleSubmit}>PUSH</AddComment>
          </CommentsAddWrap>
        )}
      </Form>
      <CommentsItemsWrap>
        {_.map(comments, (comment: IComment) => {
          if (comment.cardID === commentsCardProps.id) {
            return (
              <CommentsItems key={comment.id}>
                <CommentTitle>{comment.commentText}</CommentTitle>
                <RemoveComment onClick={() => removeHandler(comment)}>X</RemoveComment>
              </CommentsItems>
            )
          }
        })}
      </CommentsItemsWrap>
    </>
  )
}


const CommentsTitle = styled.h2`
  margin-bottom: 15px;
`
const CommentsAddWrap = styled.form`
  display: flex;
`
const CommentsInput = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 3px;
  padding: 0 10px;
  border: 2px solid #CCCCCC;
  font-size: 16px;

  &:focus {
    border: 2px solid gray;
  }
`
const CommentTitle = styled.div`
  width: 100%;
  height: 30px;
`
const CommentsItems = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  height: 40px;
  background: #E3E4E6;
  border-radius: 3px;
  margin: 5px 0;
`
const RemoveComment = styled.button`
  background: #40E3B5;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: crimson;
  }
`

const AddComment = styled.button`
  outline: none;
  background: #40E3B5;
  color: white;
  border: none;
  cursor: pointer;
  padding: 0 10px;
`
const CommentsItemsWrap = styled.div`
  height: 160px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    overflow-y: scroll;
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 15px;
  }

`