import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  user: null || sessionStorage.getItem('user'),
  name: ''
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      sessionStorage.setItem('user', action.payload)
      state.user = sessionStorage.getItem('user')
    },
    logout: (state) => {
      state.user = sessionStorage.setItem("user", null);
    },
    getUserName: (state, action) => {
      state.name = action.payload
    },
  },
});

export const { logout, register, getUserName } = userSlice.actions;

// export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
