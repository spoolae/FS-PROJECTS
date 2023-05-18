import { createSlice } from '@reduxjs/toolkit';
import * as httpClient from '../api';
import { pendingReducer, rejectedReducer, decorateAsyncThunk } from './helpers';

export const createUser = decorateAsyncThunk({
  type: 'users/createUser',
  thunk: httpClient.postUser,
});
export const getAllUsers = decorateAsyncThunk({
  type: 'users/getAllUsers',
  thunk: httpClient.getUsers,
});
export const getOneUser = decorateAsyncThunk({
  type: 'users/getOneUser',
  thunk: httpClient.getUser,
});
export const updateUser = decorateAsyncThunk({
  type: 'users/updateUser',
  thunk: httpClient.updateUser,
});
export const deleteUser = decorateAsyncThunk({
  type: 'users/deleteUser',
  thunk: httpClient.deleteUser,
});
export const getUsersCount = decorateAsyncThunk({
  type: 'users/getUsersCount',
  thunk: httpClient.getUsersCount,
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isFetching: false,
    error: null,
    users: [],
    currentUser: null,
    loginUser: null,
    usersCount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, pendingReducer);
    builder.addCase(getAllUsers.pending, pendingReducer);
    builder.addCase(getOneUser.pending, pendingReducer);
    builder.addCase(updateUser.pending, pendingReducer);
    builder.addCase(deleteUser.pending, pendingReducer);
    builder.addCase(getUsersCount.pending, pendingReducer);

    builder.addCase(createUser.rejected, rejectedReducer);
    builder.addCase(getAllUsers.rejected, rejectedReducer);
    builder.addCase(getOneUser.rejected, rejectedReducer);
    builder.addCase(updateUser.rejected, rejectedReducer);
    builder.addCase(deleteUser.rejected, rejectedReducer);
    builder.addCase(getUsersCount.rejected, rejectedReducer);

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users.unshift(action.payload.data);
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users = action.payload.data;
    });
    builder.addCase(getOneUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.currentUser = action.payload.data;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users = state.users.map((user) => {
        if (user.id === action.payload.data.id) {
          return action.payload.data;
        }
        return user;
      });
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users = state.users.filter(
        (user) => user.id !== action.payload.data.id
      );
    });
    builder.addCase(getUsersCount.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.usersCount = action.payload.count;
    });
  },
});

const { reducer } = usersSlice;
export default reducer;
