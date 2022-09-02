import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  drink: "Filter",
  type: "Decaf",
  much: "250g",
  grind: "Cafetiére",
  often: "Every Week",
};

const selectionSlice = createSlice({
  name: "selection",
  initialState: initialState,
  reducers: {
    drinkOption(state, action) {
      {
        state.drink = action.payload;
      }
    },
    typeOption(state, action) {
      {
        state.type = action.payload;
      }
    },
    muchOption(state, action) {
      {
        state.much = action.payload;
      }
    },
    grindOption(state, action) {
      {
        state.grind = action.payload;
      }
    },
    oftenOption(state, action) {
      {
        state.often = action.payload;
      }
    },
  },
});

const store = configureStore({
  reducer: selectionSlice.reducer,
});

export const selectionActions = selectionSlice.actions;

export default store;
