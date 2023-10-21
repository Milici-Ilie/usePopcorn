import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import App from "./App.vs1";
// import App from "./website-page-name";
// import App from "./localStorage";
// import App from "./Custom-HOOKS";
// import App from "./connect-useLocalStorageState";
import App from "./Escape-key";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   ); //this function will take automattically the stars from the users and place it to the description movie, also this function must be included in other functions that need it, as a prompt
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={2} />

    <Test /> */}
  </React.StrictMode>
);

/////////////////////////////////////////////////////////////////

// /*<StarRating
// maxRating={5}
// messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
// />
// {/* <StarRating maxRating={10} /> */}
// {/* <StarRating size={24} color="red" className="test" />

// <Test />  */}
