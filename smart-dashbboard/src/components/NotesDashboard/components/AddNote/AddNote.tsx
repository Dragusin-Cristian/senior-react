import React, { useCallback, useRef, useState } from "react";
import Button from "../../../common/Button";

type Props = {
  addNote: () => Promise<{}>;
};

const AddNote = ({ addNote }: Props) => {
  const [isAdding, setIsAdding] = useState(false);
  const realInputRef = useRef<HTMLInputElement>(null);

  const inputRef = useCallback((input: HTMLInputElement) => {
    if (realInputRef.current?.value && input) {
      input.value = realInputRef.current?.value;
    }
    realInputRef.current = input;
    if (input === null) return;
    input.focus();

    return () => {
      if (realInputRef.current?.value && input) {
        realInputRef.current.value = input.value;
      }
    };
  }, []);

  const addNoteHandler = useCallback(async () => {
    await addNote();
  }, [addNote]);

  return (
    <div>
      {isAdding ? (
        <>
          <input type="text" ref={inputRef} />
          <Button onClick={addNoteHandler}>Save Note</Button>
          <Button onClick={() => setIsAdding(false)}>Cancel</Button>
        </>
      ) : (
        <Button onClick={() => setIsAdding(true)}>Create note</Button>
      )}
    </div>
  );
};

export default AddNote;
