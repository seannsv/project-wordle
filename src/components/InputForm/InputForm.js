import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function InputForm({previousGuesses, setPreviousGuesses, gameStatus, setGameStatus, answer}) {

  const [guess, setGuess] = React.useState('');

  function HandleSubmit(event) {
      event.preventDefault();
      if (guess.length !== 5) {
          window.alert("Wrong number of letters");
          return;
      }
      setGuess(guess);
      const newPrevGuesses = [...previousGuesses, guess]
      setPreviousGuesses(newPrevGuesses);
      console.log(answer);
      console.log(guess);
      if (guess === answer) {
          setGameStatus('won');
      } else if (previousGuesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
          setGameStatus('lost');
      }
      setGuess("");
  }

  return <div>
    <form className="guess-input-wrapper"
          onSubmit = {HandleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input required
             minLength={5}
             maxLength={5}
             pattern="[a-zA-Z]{5}"
             title="5 letter word"
             id="guess-input"
             type="text"
             value={guess}
             disabled = {gameStatus !== 'running'}
             onChange={event => {
               setGuess(event.target.value.toUpperCase());
             }}
      />
    </form>
  </div>
}

export default InputForm;
