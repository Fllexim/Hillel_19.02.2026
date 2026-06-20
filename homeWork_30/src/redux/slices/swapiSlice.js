import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
};

export const swapi = createSlice({
  name: "swapi",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },

    clearData: (state) => {
      state.data = null;
    },
  },
});

export const fetchSwapiData = (path) => {
  return async (dispatch) => {
    dispatch(swapi.actions.setLoading(true));

    try {
      const response = await fetch(`https://swapi.py4e.com/api/${path}`);

      const data = await response.json();

      dispatch(swapi.actions.setData(data));
    } catch (error) {
      console.error(error);
      dispatch(swapi.actions.setLoading(false));
    }
  };
};
