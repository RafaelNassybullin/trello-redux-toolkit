import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { IColumns } from "redux/interfaces";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCard } from 'redux/features';
import { Field, FieldInputProps, Form } from 'react-final-form';
import { FormApi } from "final-form";

interface props {
  listDataAddCardProps: IColumns
}

export const AddCard: FC<props> = ({listDataAddCardProps}) => {
  const [addCardOpen, setAddCardOpen] = useState<boolean>(false);
  const dispatch = useDispatch()

  const addCardHandler = (cardTextValue: string, form: FormApi<FormData>) => {
    if (cardTextValue) {
      dispatch(addCard({
        id: uuidv4(),
        columnID: listDataAddCardProps.id,
        cardTitle: cardTextValue,
        cardDescription: 'Описание'
      }))
    }
    setAddCardOpen(false)
    form.reset()
  }

  return (
    <Form onSubmit={(value: FormData, form: FormApi<FormData>) => addCardHandler(String(Object.values(value)), form)}>
      {({handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          {addCardOpen && <Field name='addCard'>
            {({input}: FieldInputProps<InputEvent>) => (
              <InputAddCard
                {...input}
                autoFocus
                onBlur={handleSubmit}
                type="text"/>
            )}
          </Field>}
          <ListButton
            type={'button'}
            onClick={() => setAddCardOpen(!addCardOpen)}
            addCardOpen={addCardOpen}
          >+ Add a card...</ListButton>
        </form>
      )}
    </Form>
  )
}

const InputAddCard = styled.input`
  width: 100%;
  font-size: 16px;
  height: 30px;
  border-radius: 3px;
  outline: none;
  border: 2px solid rgba(0, 152, 155, 1);
`

const ListButton = styled.button<{ addCardOpen: boolean }>`
  position: absolute;
  bottom: 7px;
  left: 5px;
  outline: none;
  border: none;
  color: gray;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  padding: 3px 10px;
  border-radius: 3px;
  background: ${(props) => props.addCardOpen ? '#A470FE' : 'transparent'};
  color: ${(props) => props.addCardOpen ? 'white' : 'gray'};
`