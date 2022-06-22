import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type GameSliceType = {
  gameStarted: boolean;
  colorToPlay: string;
  playerPlayTime: boolean;
  playerSequence: string[];
  score: number;
  gameOver: boolean;
};

const initialState: GameSliceType = {
  gameStarted: false,
  colorToPlay: '',
  playerPlayTime: false,
  playerSequence: [],
  score: 0,
  gameOver: false,
};

const GameSlice = createSlice({
  name: 'game',
  initialState: initialState,

  reducers: {
    startGame: state => {
      state.gameStarted = true;
    },

    endGame: (state, action: PayloadAction<boolean | undefined>) => {
      state.gameStarted = false;
      state.colorToPlay = '';
      state.playerPlayTime = false;
      state.playerSequence = [];
      state.score = 0;
      state.gameOver = false;
    },

    allowPlayerFromPlay: (
      state,
      action: PayloadAction<boolean | undefined>,
    ) => {
      state.playerPlayTime = true;
    },

    preventPlayerFromPlay: (
      state,
      action: PayloadAction<boolean | undefined>,
    ) => {
      state.playerPlayTime = false;
    },

    applyColorToPlay: (state, action: PayloadAction<string>) => {
      state.colorToPlay = action.payload;
    },

    resetColorToPlay: (state, action: PayloadAction<string | undefined>) => {
      state.colorToPlay = '';
    },

    addColorToPlayerSequence: (state, action: PayloadAction<string>) => {
      let newColor = action.payload;
      state.playerSequence = [...state.playerSequence, newColor];
    },

    resetPlayerSequence: (state, action: PayloadAction<undefined>) => {
      state.playerSequence = [];
    },

    incrementScore: (state, action: PayloadAction<undefined>) => {
      state.score = ++state.score;
    },
    resetScore: (state, action: PayloadAction<undefined>) => {
      state.score = 0;
    },

    showGameOver: (state, action: PayloadAction<undefined>) => {
      state.gameOver = true;
    },
  },
});

export const {
  applyColorToPlay,
  resetColorToPlay,
  startGame,
  endGame,
  allowPlayerFromPlay,
  preventPlayerFromPlay,
  addColorToPlayerSequence,
  resetPlayerSequence,
  incrementScore,
  resetScore,
  showGameOver,
} = GameSlice.actions;

export default GameSlice.reducer;
