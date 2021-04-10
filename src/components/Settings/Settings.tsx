import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Gear } from "phosphor-react";

import { SettingsContainer, SettingsPane } from "./Settings.styles";

const Settings: React.FC<{}> = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <SettingsContainer>
      {open && <SettingsPane />}
      <Gear size={24} weight="fill" onClick={() => setOpen((o) => !o)} />
    </SettingsContainer>
  );
};

export default Settings;
