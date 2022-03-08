import React, { FC, useState } from 'react';
import styled from "styled-components";
import { ICards } from "redux/interfaces";
import { ModalCardNameButton } from 'styles/globalStyles';
import { IconEdit } from "assets/icon-components/icon-edit";
import { useDispatch } from "react-redux";
import { changeTitle } from 'redux/features';
import { Field, FieldInputProps, Form } from 'react-final-form';

interface props {
  modalTitleCardData: ICards
}

export const ModalCardNames: FC<props> = ({modalTitleCardData}) => {
  const [cardTitleChangeOpen, setcardTitleChangeOpen] = useState<boolean>(false);
  const dispatch = useDispatch()

  const changeCardTitle = (cardTitleValue: string) => {
    setcardTitleChangeOpen(!cardTitleChangeOpen)
    if (cardTitleValue) {
      dispatch(changeTitle({cardTitleValue, modalTitleCardData}))
    }
  }

  return (
    <Form onSubmit={(value: FormData) => changeCardTitle(String(Object.values(value)))}
          initialValues={{changeCardName: modalTitleCardData.cardTitle}}
    >
      {({handleSubmit}) => (
        <ModalCardNameForm onSubmit={handleSubmit}>
          <ModalCardNameTitleWrap>
            <h3>Card name:</h3>
            <ModalCardNameButton onClick={handleSubmit}>
              <IconEdit/>
            </ModalCardNameButton>
          </ModalCardNameTitleWrap>
          {!cardTitleChangeOpen && <p>{modalTitleCardData.cardTitle}</p>}
          {cardTitleChangeOpen && <Field name='changeCardName'>
            {({input}: FieldInputProps<InputEvent>) => (
              <ModalCardNameInput
                {...input}
                type="text"
                onBlur={handleSubmit}
                onFocus={(e) => e.target.select()}
                autoFocus/>
            )}
          </Field>}
        </ModalCardNameForm>
      )}
    </Form>
  )
}

const ModalCardNameForm = styled.form`
  margin: 8px 0;
`
const ModalCardNameTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ModalCardNameInput = styled.input`
  width: 50%;
  outline: none;
  background: white;
  border: 2px solid #CCCCCC;
  border-radius: 3px;
  height: 30px;

  &:focus {
    border: 1px solid seagreen;
  }
`