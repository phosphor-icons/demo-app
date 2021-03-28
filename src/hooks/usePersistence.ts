import { useEffect } from "react";
import { useRecoilCallback } from "recoil";

import { noteIdsAtom, noteAtoms, settingsAtom } from "../state";
import { persist } from "../state/persistence";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

interface Time {
  seconds?: number;
  minutes?: number;
  hours?: number;
}

const usePersistence = (time: Time = { seconds: 60 }) => {
  const saveSnapshotToDisk = useRecoilCallback(({ snapshot }) => () => {
    const settings = snapshot.getLoadable(settingsAtom).getValue();
    const ids = snapshot.getLoadable(noteIdsAtom).getValue();
    const notes = ids.map((id) => ({
      id,
      ...snapshot.getLoadable(noteAtoms(id)).getValue(),
    }));
    persist({ settings, notes });
  });

  useEffect(() => {
    const { seconds = 0, minutes = 0, hours = 0 } = time;
    const updateInterval = seconds * SECOND + minutes * MINUTE + hours * HOUR;
    const syncHandle = setInterval(saveSnapshotToDisk, updateInterval);
    return () => clearInterval(syncHandle);
  }, [time, saveSnapshotToDisk]);

  return [saveSnapshotToDisk];
};

export default usePersistence;
