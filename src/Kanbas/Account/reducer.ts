import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   currentUser: null,
// };
// TODO: REVERSE
const initialState = {
  currentUser: {
    "_id": "123",
    "username": "iron_man",
    "password": "stark123",
    "firstName": "Tony",
    "lastName": "Stark",
    "email": "tony@stark.com",
    "dob": "1970-05-29T00:00:00.000Z",
    "role": "STUDENT",
    "loginId": "001234561S",
    "section": "S101",
    "lastActivity": "2020-10-01",
    "totalActivity": "10:21:32"
  }
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;