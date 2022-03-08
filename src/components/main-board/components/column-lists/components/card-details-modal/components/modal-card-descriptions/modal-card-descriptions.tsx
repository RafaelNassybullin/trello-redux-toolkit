import React, { FC, useState } from 'react';
import styled from "styled-components";
import { ICards } from "redux/interfaces";
import { ModalCardNameButton } from "styles/globalStyles";
import { IconEdit } from "assets/icon-components/icon-edit";
import { useDispatch } from "react-redux";
import { changeDescription } from 'redux/features';
import { Field, FieldInputProps, Form } from 'react-final-form';

interface props {
  modalDescriptionCardData: ICards
}

export const ModalCardDescriptions: FC<props> = ({modalDescriptionCardData}) => {
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  const dispatch = useDispatch()

  const changeCardDescription = (descriptionValue: string) => {
    setDescriptionOpen(!descriptionOpen)
    if (descriptionValue) {
      dispatch(changeDescription({descriptionValue, modalDescriptionCardData}))
    }
  }

  return (
    <Form onSubmit={(value: FormData) => changeCardDescription(String(Object.values(value)))}>
      {({handleSubmit}) => (
        <ModalCardDescription>
          <ModalCardDescriptionWrap>
            <ModalCardDescriptionTitle>Description</ModalCardDescriptionTitle>
            <ModalCardNameButton onClick={handleSubmit}>
              <IconEdit/>
            </ModalCardNameButton>
          </ModalCardDescriptionWrap>
          {descriptionOpen &&
          <Field name='descriptionFieldName'>
            {({input}: FieldInputProps<InputEvent>) => (
              <ModalCardDescriptionInput
                {...input}
                onBlur={handleSubmit}
                onFocus={(e) => e.target.select()}
                autoFocus/>
            )}
          </Field>}
          {!descriptionOpen && <DescriptionBlock onClick={handleSubmit}>
            <p>{modalDescriptionCardData.cardDescription}</p>
          </DescriptionBlock>}
        </ModalCardDescription>
      )}
    </Form>
  )
}
const ModalCardDescription = styled.form`
  margin-bottom: 15px;
`
const ModalCardDescriptionTitle = styled.h2`

`
const ModalCardDescriptionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const DescriptionBlock = styled.div`
  margin-top: 10px;
  background: #E3E4E6;
  width: 100%;
  height: 45px;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;

`
const ModalCardDescriptionInput = styled.textarea`
  width: 100%;
  height: 45px;
  background: #E3E4E6;
  border-radius: 3px;
  outline: none;
  border: none;
  margin-top: 15px;
  font-size: 16px;
  resize: none;
  padding: 3px;

  &:focus {
    border: seagreen 1px solid;
  }
`
