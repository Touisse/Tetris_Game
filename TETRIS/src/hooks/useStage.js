import { useState } from "react";
import { createStage } from "../gameHelper";

export const useStage = () => {
  const [stage, setStage] = useState(createStage());

  return [stage, setStage];
};
