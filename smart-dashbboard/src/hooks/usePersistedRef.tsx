import React, { useCallback, useRef } from "react";

const usePersistedRef = () => {
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

  return { inputRef, realInputRef };
};

export default usePersistedRef;
