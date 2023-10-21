import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key); //here we imported the "key" otherwise this wouldn't work
    return storedValue ? JSON.parse(storedValue) : initialState; //here we tell that if there is no movie saved in the Local Storage than return the "initialState" meaning an empty Array. The empty box with no movies selected. Without tis "Ternarry operator" there will be an error without a movie/ with an empty list(array)
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key] //we also need to pas the key here because our effect depends on that variable
  );

  return [value, setValue]; //here we return those value from the HOOK, meaning that we sent the logic to the parent file
}
