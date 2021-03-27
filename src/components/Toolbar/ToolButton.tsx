import React from "react";
import { Icon } from "phosphor-react";
import { useRecoilState } from "recoil";

import { Tool, selectedToolAtom } from "../../state";
import { ToolButtonContainer } from "./ToolButton.styles";

interface ToolButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: Icon;
  tool: Tool;
  toggleable?: boolean;
  onClick?: () => void;
}

const ToolButton: React.FC<ToolButtonProps> = ({
  icon: Icon,
  tool,
  toggleable = false,
  onClick,
  ...rest
}) => {
  const [selectedTool, setSelectedTool] = useRecoilState(selectedToolAtom);
  const isSelectedTool = toggleable && selectedTool === tool;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (toggleable) setSelectedTool(tool);
    onClick?.();
  };

  return (
    <ToolButtonContainer
      $active={isSelectedTool}
      onClick={handleClick}
      {...rest}
    >
      <Icon size={24} weight={isSelectedTool ? "fill" : "regular"} />
    </ToolButtonContainer>
  );
};

export default ToolButton;
