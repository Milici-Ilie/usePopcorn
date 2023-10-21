// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD` ////// here is the link API for converting the currency money

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1); //this
  const [fromCur, setFromCur] = useState("EUR"); //this
  const [toCur, setToCur] = useState("USD"); // and this will be connected with the input valuea, the fist box for money and the second box
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false); //this prop is created to make the reload time faster, is set to false, but in our "useEffect" will be change to true and than to again to false

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        ); //this link is the actual convertion, here we include our data's in to the API link with our props info's// also here we made a request from the API for informations
        const data = await res.json(); // here we take those info's from above and transform them using ".json"
        console.log(data); // here we display those info's inside of our console
        setConverted(data.rates[toCur]); // with the info's from the console.log from above we get the ".rates" that has the value of USD, but we can't hardcore this so we must create a new PROP that will have the roll to change from one value to another, in our case [toCur] // !!! also this entire value is implemented inside of "setConverted" PROP that will change the "converted"
        setIsLoading(false);
      }

      if (fromCur === toCur) return setConverted(amount); // this will check if the "fromCur" current value is equal with the "toCur" value that we choose, for ex. EUR===EUR, than return the same value
      convert();
    },
    [amount, fromCur, toCur] // here the dependency has the roll to reload the info's over and over again to keep in update our values, here we include the same values as those from the API link
  ); // always when we have an HTTP request we must create and "useEffect" that will request the info's using "async" function

  return (
    <div>
      <input
        type="text"
        value={amount} // here is connected to our prop from above
        onChange={(e) => setAmount(Number(e.target.value))} //this will take the value from the input field and will tranform it in from a string to a number
        disabled={isLoading} //this will disable the input field with takes values that we implemented to give the time for instant loading
      />
      <select
        value={fromCur} // here is connected to our prop from above
        onChange={(e) => setFromCur(e.target.value)} //this will take the value from the input field and will tranform it in from a string to a number
        disabled={isLoading} //this will disable the values implemented to give the time for instant loading
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCur} // here is connected to our prop from above
        onChange={(e) => setToCur(e.target.value)} //this will take the value from the input field and will tranform it in from a string to a number
        disabled={isLoading} //this will disable the values implemented to give the time for instant loading
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {converted} {toCur}
      </p>
    </div> //here we display the value that we get from the "setConverted" ///// and the "toCur" will display the name of the money "USD, EUR, etc"
  );
}
