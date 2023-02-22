import React from "react";
import { createStage } from "../gameHelper";
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";
import { StyledTetris, StyledTetrisWrapper } from "./Styles/StyledTertis";

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
