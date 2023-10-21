import { useEffect, useState } from "react";
//❌THIS "CUSTOM HOOK" HAS THE LOGIC TO SEARCH FOR MOVIES❌//
const KEY = "a9190d73";
//NOTE// a "Custom HOOK" needs to use at least 1 react HOOK, otherwise will be just a simple function

//❌❌❌ the CALLBACK function is optional, there is a bug when we call in the "Dependency array", so we dont know yet how to handle this bugg, so skeep it for now ❌❌❌//

export function useMovies(query, callback) {
  // ❗❗ here we introduce the "query" manual, this "query" is needed inside of our API link// ❗❗❗❗ we also called the "callback" from the original code/file to have acces to the "close Function"
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      callback?.(); //here we are calling the "callback Function" that we implemented as an argument above ⬆ /// this optional chaining will run the function "callback" only if this exist and is summoned

      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with loading the page");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          console.log(err.message);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error }; //this will help to return those "props" back to the original file (parent) ❗❗
}
