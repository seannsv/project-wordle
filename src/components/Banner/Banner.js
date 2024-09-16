import React from 'react';

function Banner({gameStatus, answer, nbrGuesses}) {

    console.log(gameStatus);
    if (gameStatus === 'won') {
        console.log('gameStatus = won');
      return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in {' '}
          <strong>{nbrGuesses} guess</strong>
            {nbrGuesses !== 1 && <strong>es</strong>}
            <strong>.</strong>
        </p>
      </div>
      );
    } else if (gameStatus === 'lost') {
        console.log('gamestatus = lost');
      return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
      );
    } else {
        console.log('gamestatus is running');
        return null;
    }
}

export default Banner;
