import { createSlice } from "@reduxjs/toolkit";
import storeTypes from "../constants/store-types";
import { PlayersActionTypes } from "../constants/action-types";

const initialState = {
  get: {
    data: null,
    idle: true,
    errors: false,
    loading: false,
    totalItems: 0,
  },
};

const getReducer = {
  [PlayersActionTypes.GET.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, get: { ...query } };
  },
  [PlayersActionTypes.GET.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, get: { ...query } };
  },
  [PlayersActionTypes.GET.SUCCESS]: (state, action) => {
    const {
      payload: { data, totalItems },
    } = action;
    const query = {
      idle: false,
      loading: false,
      errors: false,
      data,
      totalItems,
    };
    return { ...state, get: { ...query } };
  },
};

const clientSlice = createSlice({
  name: storeTypes.PLAYERS,
  initialState,
  reducers: {
    ...getReducer,
  },
});

export const { actions } = clientSlice;

export default clientSlice.reducer;
