import React from "react";
import { Icon } from "phosphor-react";
import { useRecoilState } from "recoil";

import { Tool, selectedToolAtom } from "../../state";
import { ToolButtonContainer } from "./ToolButton.styles";

interface ToolButtonProps {
  icon: Icon;
  tool: Tool;
}

const ToolButton: React.FC<ToolButtonProps> = ({ icon: Icon, tool }) => {
  const [selectedTool, setSelectedTool] = useRecoilState(selectedToolAtom);
  const isSelectedTool = selectedTool === tool;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSelectedTool(tool);
  };

  return (
    <ToolButtonContainer $active={isSelectedTool} onClick={handleClick}>
      <Icon size={24} weight={isSelectedTool ? "fill" : "regular"} />
    </ToolButtonContainer>
  );
};

export default ToolButton;
