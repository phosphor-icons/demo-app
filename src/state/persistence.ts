import { promisified } from "tauri/api/tauri";
import { AppState } from ".";

enum Command {
  LOAD = "load",
  SAVE = "save",
  SYNC = "sync",
}

export const persist = (state: AppState) => {
  promisified<boolean>({
    cmd: Command.SAVE,
    payload: JSON.stringify(state),
  }).then(
    (val) => console.log(val),
    (err) => console.error(err)
  );
};

export const load = () => {
  promisified<string>({
    cmd: Command.LOAD,
  }).then((json) => console.log(json), console.error);
};
