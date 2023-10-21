import { useEffect } from "react";

export function useKey(key, action) {
  // here we defined just a "key" for the press, and a callback for the "action". those are customization dependeing on the user
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action(); // here we call the action, function that the user call in/// also here we called "toLowerCase" on both sides because we transform the sting in lower letters in case the user include some key in the wrong format, ex: "EscApE"
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },

    [action, key]
  );
}
