import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialStateOptions = {
  drink: "Filter",
  type: "Decaf",
  much: "250g",
  grind: "Cafetiére",
  often: "Every Week",
  amount: "28.80",
};

const selectionSlice = createSlice({
  name: "selection",
  initialState: initialStateOptions,
  reducers: {
    drinkOption(state, action) {
      state.drink = action.payload;
    },
    typeOption(state, action) {
      state.type = action.payload;
    },
    muchOption(state, action) {
      state.much = action.payload;
      if (state.much === "250g") {
        if (state.often === "Every Week") {
          state.amount = "28.80";
        } else if (state.often === "Every 2 Weeks") {
          state.amount = "19.20";
        } else {
          state.amount = "12.00";
        }
      } else if (state.much === "500g") {
        if (state.often === "Every Week") {
          state.amount = "52.00";
        } else if (state.often === "Every 2 Weeks") {
          state.amount = "35.00";
        } else {
          state.amount = "22.00";
        }
      } else {
        if (state.often === "Every Week") {
          state.amount = "88.00";
        } else if (state.often === "Every 2 Weeks") {
          state.amount = "64.00";
        } else {
          state.amount = "42.00";
        }
      }
    },
    grindOption(state, action) {
      state.grind = action.payload;
    },
    oftenOption(state, action) {
      state.often = action.payload;
      if (state.much === "250g") {
        if (state.often === "Every Week") {
          state.amount = "28.80";
        } else if (state.often === "Every 2 Weeks") {
          state.amount = "19.20";
        } else {
          state.amount = "12.00";
        }
      } else if (state.much === "500g") {
        if (state.often === "Every Week") {
          state.amount = "52.00";
        } else if (state.often === "Every 2 Weeks") {
          state.amount = "35.00";
        } else {
          state.amount = "22.00";
        }
      } else {
        if (state.often === "Every Week") {
          state.amount = "88.00";
        } else if (state.often === "Every 2 Weeks") {
          state.amount = "64.00";
        } else {
          state.amount = "42.00";
        }
      }
    },
  },
});

const store = configureStore({
  reducer: selectionSlice.reducer,
});

export const selectionActions = selectionSlice.actions;

export default store;
