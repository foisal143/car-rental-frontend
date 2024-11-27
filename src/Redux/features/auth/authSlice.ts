import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { email: null, role: null },
  token: '',
};
const authSlice = createSlice({
  name: 'driveSecuireAuth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: state => {
      state.user = { email: null, role: null };
      state.token = '';
    },
  },
});

export const { addUser, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
