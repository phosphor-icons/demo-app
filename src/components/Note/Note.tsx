import React, { forwardRef } from "react";
import { useRecoilState } from "recoil";
import { Trash, LockOpen, LockKey, Eye, EyeSlash } from "phosphor-react";

import { noteAtoms } from "../../state";
import Toolbar from "../Toolbar";
import {
  NoteContainer,
  NoteContent,
  NoteAction,
  NoteHidden,
} from "./Note.styles";

interface NoteProps {
  id: string;
  onDelete: (id: string) => void;
}

const Note = forwardRef<HTMLDivElement, NoteProps>(({ id, onDelete }, ref) => {
  const [{ content, locked, visible }, setNote] = useRecoilState(noteAtoms(id));

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote((n) => ({ ...n, content: event.target.value }));
  };

  const onToggleVisibility = () => {
    setNote((n) => ({ ...n, visible: !n.visible }));
  };

  const onToggleLock = () => {
    setNote((n) => ({ ...n, locked: !locked }));
  };

  return (
    <Toolbar
      id={id}
      ref={ref}
      extras={
        <>
          <NoteAction onClick={onToggleVisibility}>
            {visible ? (
              <Eye size={24} weight="fill" />
            ) : (
              <EyeSlash size={24} weight="fill" />
            )}
          </NoteAction>
          {visible && (
            <NoteAction onClick={onToggleLock}>
              {locked ? (
                <LockKey size={24} weight="fill" />
              ) : (
                <LockOpen size={24} weight="fill" />
              )}
            </NoteAction>
          )}
          {visible && !locked && (
            <NoteAction onClick={() => onDelete(id)}>
              <Trash size={24} weight="fill" />
            </NoteAction>
          )}
        </>
      }
    >
      <NoteContainer>
        {visible ? (
          <NoteContent
            value={content}
            disabled={locked}
            placeholder="Add some notes..."
            onChange={onChange}
          />
        ) : (
          <NoteHidden>Nothing to see here...</NoteHidden>
        )}
      </NoteContainer>
    </Toolbar>
  );
});

export default Note;
