import React, { FC } from 'react';
import GlobalStyles from "../styles/globalStyles";
import { MainBoard } from "./main-board";

export const App: FC = () => {
  return (
    <>
      <GlobalStyles/>
      <MainBoard/>
    </>
  );
}

