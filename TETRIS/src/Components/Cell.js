import React from "react";
import { TETROMINOS } from "../tetrominos";
import { StyledCell } from "./Styles/StyledCell";

const Cell = ({ type }) => {
  return <StyledCell type={"L"} color={TETROMINOS["L"].color}></StyledCell>;
};

export default Cell;
