import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gamesData: {
    count: '',
    results: [],
  },
  options: {},
  query: '',
};

const gamesReducer = createSlice({
  name: 'gamesData',
  initialState,
  reducers: {
    add(state, { payload: { count, results } }) {
      const { gamesData: { results: currentResults } } = state;
      const filtered = results.filter(el => currentResults.every(cur => el.id !== cur.id));
      state.gamesData.count = count;
      state.gamesData.results = [...currentResults, ...filtered];
    },
    clearGamesData(state) {
      state.gamesData = {
        count: 0,
        results: [],
      };
    },
    changeOptions(state, { payload }) {
      state.options = { ...state.options, ...payload };
    },
    resetFilter(state) {
      delete(state.options.platforms);
    }
  },
});

export const {
  reducer: gamesDataReducer,
  actions: {
    add,
    clearGamesData,
    changeOptions,
    resetFilter,
  }
} = gamesReducer;
