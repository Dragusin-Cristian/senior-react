import React, { useCallback, useState } from "react";
import Button from "../../../common/Button";

type Props = {
  addNote: () => Promise<{}>;
};

const AddNote = ({ addNote }: Props) => {
  const [isAdding, setIsAdding] = useState(false);

  const addNoteHandler = useCallback(async () => {
    await addNote();
  }, [addNote]);

  return (
    <div>
      {isAdding ? (
        <>
          <input type="text" />
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
