import React, { forwardRef } from "react";
import { useRecoilState } from "recoil";
import { Trash, LockOpen, LockKey } from "phosphor-react";

import { noteAtoms } from "../../state";
import Toolbar from "../Toolbar";
import { NoteContainer, NoteContent, NoteAction } from "./Note.styles";

interface NoteProps {
  id: string;
  onDelete: (id: string) => void;
}

const Note = forwardRef<HTMLDivElement, NoteProps>(({ id, onDelete }, ref) => {
  const [{ content, locked }, setNote] = useRecoilState(noteAtoms(id));

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote({ locked, content: event.target.value });
  };

  const onToggleLock = () => {
    setNote({ content, locked: !locked });
  };

  return (
    <Toolbar
      id={id}
      ref={ref}
      extras={
        <>
          <NoteAction onClick={onToggleLock}>
            {locked ? (
              <LockKey size={24} weight="fill" />
            ) : (
              <LockOpen size={24} weight="fill" />
            )}
          </NoteAction>
          {!locked && (
            <NoteAction onClick={() => onDelete(id)}>
              <Trash size={24} weight="fill" />
            </NoteAction>
          )}
        </>
      }
    >
      <NoteContainer>
        <NoteContent
          value={content}
          disabled={locked}
          placeholder="Add some notes..."
          onChange={onChange}
        />
      </NoteContainer>
    </Toolbar>
  );
});

export default Note;
