import Game from './game';
import GameButtons from './game_buttons';
import GameScore from './score';
import GameStart from './start';
import GameButton from './button';

import {
  IButtonData,
  GameButtonProps,
  GameButtonsProps,
  RootState,
} from '../../types';

import {GameScreenProps, ResultScreenProps} from '../../navigation/types';

import {
  scoreStyle,
  startStyle,
  buttonStyle,
  gameStyle,
  MIDDLE_CIRCLE_SIZE,
} from '../styles';

import {GAME_DATA, SPEED} from './data';

export {
  GameButtons,
  GameScore,
  GameStart,
  GameButton,
  scoreStyle,
  startStyle,
  buttonStyle,
  gameStyle,
  MIDDLE_CIRCLE_SIZE,
  GAME_DATA,
  SPEED,
};

export type {
  IButtonData,
  GameButtonProps,
  GameButtonsProps,
  RootState,
  GameScreenProps,
  ResultScreenProps,
};

export default Game;
