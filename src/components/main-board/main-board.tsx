import React, { FC, useState } from "react";
import { ColumnLists } from "./components";
import { ModalPopup } from "../modal-popup";
import { YourNameInput } from "./components";

export const MainBoard: FC = () => {
  const [showModal, setShowModal] = useState<string>('')

  const modalCallback = (name: string) => setShowModal(name)

  return (
    <>
      <ColumnLists/>
      {!showModal && !localStorage.getItem('name') && <ModalPopup>
        <YourNameInput modalCallback={modalCallback}/>
      </ModalPopup>}
    </>
  );
}