import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IResultData} from '../types';

type ResultsSliceType = {
  results: IResultData[];
};

const initialState: ResultsSliceType = {
  results: [],
};

const ResultsSlice = createSlice({
  name: 'results',
  initialState: initialState,

  reducers: {
    addResult: (state, action: PayloadAction<IResultData>) => {
      let results = [...state.results];
      results.push(action.payload);
      results.sort((a, b) => b.score - a.score);
      // top 10 scores only
      if (results.length > 10) {
        results = results.slice(0, 10);
      }
      state.results = results;
    },
  },
});

export const {addResult} = ResultsSlice.actions;

export default ResultsSlice.reducer;
