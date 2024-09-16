import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputForm from '../InputForm';
import PreviousGuesses from "../PreviousGuesses";
import Banner from "../Banner";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  return <div>
   <PreviousGuesses previousGuesses={previousGuesses} answer={answer} setGameStatus = {setGameStatus}/>
    <Banner gameStatus = {gameStatus} answer = {answer} nbrGuesses={previousGuesses.length}/>
    <InputForm previousGuesses={previousGuesses} setPreviousGuesses={setPreviousGuesses} gameStatus = {gameStatus} setGameStatus={setGameStatus} answer = {answer}/>
    </div>
}

export default Game;
