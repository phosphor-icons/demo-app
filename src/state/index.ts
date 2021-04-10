import { atom, atomFamily } from "recoil";

export interface AppState {
  settings: Settings;
  notes: NoteState[];
}

export interface Settings {
  has_onboarded: boolean;
}

export enum Tool {
  NONE,
  PEN,
  PENCIL_CIRCLE,
  MARKER_CIRCLE,
  PAINT,
  TEXT,
  ERASER,
  EYEDROPPER,
}

export enum Cursor {
  DEFAULT = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23000000' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpath d='M38.18466,48.47939l58.21413,155.2377a8,8,0,0,0,15.009-.075L134.729,139.50856a8,8,0,0,1,4.78441-4.7844l64.13348-23.32127a8,8,0,0,0,.07505-15.009L48.48428,38.17977A8,8,0,0,0,38.18466,48.47939Z' fill='white' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/path%3E%3Cline x1='136.59053' y1='136.58564' x2='208.00488' y2='208' fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/line%3E%3C/svg%3E") 4 4`,
  HAND = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23000000' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpath d='M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.18278,0-64-24-96.56854-92.71349a20,20,0,1,1,34.641-20L88,157.26608V52a20,20,0,0,1,40,0v68' fill='white' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/path%3E%3Cpath d='M168,120V36a20,20,0,0,0-40,0v84' fill='white' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/path%3E%3C/svg%3E") 16 4`,
  HAND_GRABBING = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23000000' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpath d='M128,124V92a20,20,0,0,0-40,0v56' fill='white' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/path%3E%3Cpath d='M168,124V92a20,20,0,0,0-40,0v32' fill='white' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/path%3E%3Cpath d='M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16' fill='white' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/path%3E%3C/svg%3E") 16 4`,
  POINTER = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23000000' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpath d='M128,104V36a20,20,0,0,0-40,0V157.26608L66.07247,119.28651a20,20,0,1,0-34.641,20C64,208,83.81722,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0' fill='white' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/path%3E%3Cpath d='M168,112V100a20,20,0,0,0-40,0v4' fill='white' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/path%3E%3C/svg%3E") 16 4`,
}

export const selectedToolAtom = atom<Tool>({
  key: "selectedTool",
  default: Tool.NONE,
});

export interface Note {
  content?: string;
  locked: boolean;
  visible: boolean;
}

interface NoteState extends Note {
  id: string;
}

export const noteIdsAtom = atom<string[]>({
  key: "noteIds",
  default: [],
});

export const noteAtoms = atomFamily<Note, string>({
  key: "notesAtom",
  default: { content: "", visible: true, locked: false },
});

export const settingsAtom = atom<Settings>({
  key: "settings",
  default: {
    has_onboarded: false,
  },
});
