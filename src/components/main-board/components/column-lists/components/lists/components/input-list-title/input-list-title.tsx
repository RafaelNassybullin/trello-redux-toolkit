import React, { FC, useState } from 'react';
import { IColumns } from "redux/interfaces";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeListTitle } from 'redux/features';
import { Field, FieldInputProps, Form } from 'react-final-form';

interface props {
  listTitleData: IColumns
}

export const InputListTitle: FC<props> = ({listTitleData}) => {
  const [inputOpen, setInputOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  const titleChangeDispatchHandler = (inputValue: string) => {
    if (inputValue) dispatch(changeListTitle({listTitleData, inputValue}))
    setInputOpen(!inputOpen);
  }

  return (
    <Form onSubmit={(value: FormData) => titleChangeDispatchHandler(String(Object.values(value)))}
          initialValues={{listTitle: listTitleData.listTitle}}>
      {({handleSubmit}) => (
        <ListTitleChange onSubmit={handleSubmit}>
          {
            inputOpen
              ?
              <Field name='listTitle'>
                {({input}: FieldInputProps<InputEvent>) => (
                  <ListTitleInput
                    {...input}
                    autoFocus
                    onBlur={handleSubmit}
                    onFocus={(e) => e.target.select()}
                    type='text'
                  />
                )}
              </Field>
              :
              <ListTitle onClick={() => setInputOpen(!inputOpen)}>{listTitleData.listTitle}</ListTitle>
          }
        </ListTitleChange>
      )}
    </Form>
  )
}

const ListTitleChange = styled.form`
  width: 100%;
`
const ListTitle = styled.h3`

`
const ListTitleInput = styled.input`
  width: 100%;
  font-size: 21px;
  font-weight: 700;
  background: white;
  outline: none;
  border: 2px solid rgba(0, 152, 155, 1);
  border-radius: 3px;
`