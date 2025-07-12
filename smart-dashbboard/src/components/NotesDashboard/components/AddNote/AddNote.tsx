import React, { useCallback, useState } from "react";
import Button from "components/common/Button";
import usePersistedRef from "hooks/usePersistedRef";
import TNote from "types/Note.type";

type Props = {
  addNote: (newItem: Omit<TNote, "id">) => Promise<void>;
};

const AddNote = ({ addNote }: Props) => {
  const [isAdding, setIsAdding] = useState(false);
  const { inputRef: titleInputRef, realInputRef: titleRealInputRef } =
    usePersistedRef();
  const { inputRef: textInputRef, realInputRef: textRealInputRef } =
    usePersistedRef();

  const validateInput = (input: React.RefObject<HTMLInputElement | null>) => {
    const value = input.current?.value;
    if (input.current) {
      if (!value || value.trim().length === 0) {
        return (input.current.style.border = "1px solid red");
      } else {
        input.current.style.border = "";
      }
    }
  };

  const addNoteHandler = useCallback(async () => {
    const title = titleRealInputRef.current?.value;
    const text = textRealInputRef.current?.value;
    validateInput(titleRealInputRef);
    validateInput(textRealInputRef);

    if (title && text) {
      await addNote({ title, text, userId: 1 });
    }
  }, [addNote, textRealInputRef, titleRealInputRef]);

  return (
    <div>
      {isAdding ? (
        <>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" ref={titleInputRef} />
          <label htmlFor="text">Text: </label>
          <input type="text" name="text" ref={textInputRef} />
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
