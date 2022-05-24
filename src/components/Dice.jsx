import '../Dice.css';

import React, { useState } from 'react';

import dice0 from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = () => {
  const arrayOfDice = [dice1, dice2, dice3, dice4, dice5, dice6];

  const generateRandom = (min, max) =>
    Math.floor(min + Math.random() * (max - min));

  const randomNumber = generateRandom(0, 6);
  console.log(randomNumber);

  const [diceThrow, setDiceThrow] = useState(true);

  const togglePicture = () => {
    setDiceThrow(!diceThrow);
    console.log(diceThrow + '1');
    /* setDiceThrow(diceThrow); */
    /*     if (!diceThrow) {
      setDiceThrow(diceThrow);
      console.log(diceThrow + '2');
    }
    */
  };

  const picture = diceThrow ? arrayOfDice[randomNumber] : dice0;

  /*   const [firstState, setFirstState] = useState(randomNumber);
  const [secondState, setSecondState] = useState(dice0);

  const randomPic = () => {
    setSecondState(arrayOfDice[randomNumber]); 
  }; */

  return (
    <div>
      <button onClick={togglePicture}>
        <img className="dice" src={picture} alt="" />
      </button>
    </div>
  );
};

export default Dice;
