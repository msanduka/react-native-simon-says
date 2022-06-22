import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {
  GameButtons,
  GameScore,
  GameStart,
  IButtonData,
  RootState,
  GameScreenProps,
  GAME_DATA,
  SPEED,
  gameStyle,
} from '.';

import {
  applyColorToPlay,
  resetColorToPlay,
  endGame,
  allowPlayerFromPlay,
  preventPlayerFromPlay,
  resetPlayerSequence,
  incrementScore,
  showGameOver,
} from '../../reducers/game';

import {RESULT_SCREEN_KEY} from '../../navigation/keys';

import playSound from '../../audio';

const Game = ({route, navigation}: GameScreenProps) => {
  const dispatch = useDispatch();

  const {gameStarted, playerSequence, score} = useSelector(
    (state: RootState) => state.game,
  );

  const [gameSequence, setGameSequence] = useState<IButtonData[]>([]);

  //This method is used to add random values to the game sequence
  const playGame = () => {
    //  copy gameSequence and add the next random color
    let tempSequence = [...gameSequence];
    // Math.floor(Math.random() * max) to get numbers between 0 - (max - 1)
    tempSequence.push(GAME_DATA[Math.floor(Math.random() * GAME_DATA.length)]);
    // set the new game sequence
    // once gameSequence is set the useEffect will be called to play the game sequence
    setGameSequence(tempSequence);
  };

  //This method is used to play gameSequence values
  const playGameSequence = () => {
    let index = 0;
    const interval = setInterval(() => {
      playSound(gameSequence[index].sound);
      // set color to play for half of the speed time and then clear it ( set to empty state)
      dispatch(applyColorToPlay(gameSequence[index].color));
      setTimeout(() => {
        dispatch(resetColorToPlay());
      }, SPEED / 2);

      index++;
      // the case for last index on the game sequence
      // allow user to play and clear the interval
      if (index === gameSequence.length) {
        // allow user to interact after the speed time (to prevent user mistakes while the game is playing)
        setTimeout(() => {
          dispatch(allowPlayerFromPlay());
        }, SPEED);
        clearInterval(interval);
        //dispatch(endGame());
      }
    }, SPEED);
  };

  // This effect is used to start playing the game once the user click on the play button
  useEffect(() => {
    if (gameStarted) {
      playGame();
    }
  }, [gameStarted]);

  // This effect is used to play the game sequence after being set by random inputs
  useEffect(() => {
    if (gameSequence && gameSequence.length > 0) {
      // play the new sequence
      console.log(gameSequence);
      dispatch(preventPlayerFromPlay());
      playGameSequence();
    }
  }, [gameSequence]);

  // This effect is used to track the user play inputs
  useEffect(() => {
    if (playerSequence && playerSequence.length > 0) {
      // flag to check if the user faile to match the sequence
      let gameOver = false;

      for (let i = 0; i < playerSequence.length; i++) {
        // for each user input in playerSequence check if it matches the game sequence
        if (playerSequence[i] !== gameSequence[i]?.color) {
          // if it doesnt match the gameSequence then its game over
          // game over actions:
          // 1- navigate to the result screen and pass the score
          // 2- reset game state
          gameOver = true;
          dispatch(showGameOver());
          dispatch(preventPlayerFromPlay());

          // navigate to result screen and pass the player score for saving option and high score comparison
          setTimeout(() => {
            navigation.navigate(RESULT_SCREEN_KEY, {score: score});
          }, 500);

          // reset the state of the store - timeout to update the state after the user navigate from the screen
          setTimeout(() => {
            dispatch(endGame());
            setGameSequence([]);
          }, 600);

          break;
        }
      }

      if (!gameOver && playerSequence.length === gameSequence.length) {
        dispatch(resetPlayerSequence());
        dispatch(incrementScore());
        playGame();
      }
    }
  }, [playerSequence]);

  // This effect is used for cleaning
  useEffect(() => {
    return () => {
      dispatch(endGame());
    };
  }, []);

  return (
    <SafeAreaView style={gameStyle.container}>
      <GameButtons data={GAME_DATA} />
      {gameStarted && <GameScore />}
      {!gameStarted && <GameStart />}
    </SafeAreaView>
  );
};

export default Game;
