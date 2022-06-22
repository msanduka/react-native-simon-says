import React from 'react';

export type GameButtonProps = {
  color: string;
  sound: string;
  gameStarted?: boolean;
  opacityColor: string;
};

export type ScoreNameModalProps = {
  showModal: boolean;
  score: number;
};

export interface IButtonData {
  id: number;
  color: string;
  opacityColor: string;
  sound: string;
}

export type GameButtonsProps = {
  data: IButtonData[];
};

export type AlertType = {
  color: string;
  title: string;
  text: string;
  iconName: string;
  titleStyle?: any;
  textStyle?: any;
  children: React.ReactElement[];
  visible: boolean;
  hasInput?: boolean;
  dismissible?: boolean;
  onModalDissmiss: () => void;
};

export interface IResultData {
  name: string;
  score: number;
}

import {RootState} from '../store';

export type {RootState};
