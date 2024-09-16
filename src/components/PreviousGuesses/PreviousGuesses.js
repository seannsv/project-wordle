import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";

function PreviousGuesses({previousGuesses, answer, setGameStatus}) {

    function GetCurrentLetter({colIndex, resultLetter}){
        let currentClassName = 'cell';
        if (resultLetter.status === 'correct') {
            currentClassName = 'cell correct';
        } else if (resultLetter.status === 'misplaced') {
            currentClassName = 'cell misplaced';
        } else if (resultLetter.status === 'incorrect') {
            currentClassName = 'cell incorrect';
        }

        return (
            <span className={currentClassName} key = {colIndex}>
              {resultLetter.letter}
              </span>);
    }

    return (
      <div className="guess-results">
        <p>Previous Guesses</p>
        {range(0, NUM_OF_GUESSES_ALLOWED).map((rowIndex) => {
            const currentWord = previousGuesses.length > rowIndex ? previousGuesses[rowIndex]: '';
            const result = checkGuess(currentWord, answer);

            return (
            <p key={rowIndex} className="guess">
                {range(0,5).map((colIndex) => {
                    const resultLetter = result != null ? (result.length > 0 ? result[colIndex]: '') : '';
                    return(
                    GetCurrentLetter({colIndex, resultLetter})
                );
                })
                }
            </p>
                )})}
      </div>
  );
}

export default PreviousGuesses;

