import React from "react";
import { TETROMINOS } from "../tetrominos";
import { StyledCell } from "./Styles/StyledCell";

const Cell = ({ type }) => {
  return <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>;
};

export default Cell;
