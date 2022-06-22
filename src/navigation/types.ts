import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Game: undefined;
  Results: {score: number};
};

export type GameScreenProps = StackScreenProps<RootStackParamList, 'Game'>;
export type ResultScreenProps = StackScreenProps<RootStackParamList, 'Results'>;
