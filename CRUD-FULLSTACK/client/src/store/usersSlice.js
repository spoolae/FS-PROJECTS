import { createSlice } from '@reduxjs/toolkit';
import * as httpClient from '../api';
import { pendingReducer, rejectedReducer, decorateAsyncThunk } from './helpers';

export const getOneUser = decorateAsyncThunk({
  type: 'users/getOneUser',
  thunk: httpClient.getUser,
});

export const createUser = decorateAsyncThunk({
  type: 'users/createUser',
  thunk: httpClient.postUser,
});

export const getAllUsers = decorateAsyncThunk({
  type: 'users/getAllUsers',
  thunk: httpClient.getUsers,
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
    builder.addCase(getAllUsers.pending, pendingReducer);
    builder.addCase(createUser.pending, pendingReducer);
    builder.addCase(getOneUser.pending, pendingReducer);
    builder.addCase(getUsersCount.pending, pendingReducer);

    builder.addCase(getAllUsers.rejected, rejectedReducer);
    builder.addCase(createUser.rejected, rejectedReducer);
    builder.addCase(getOneUser.rejected, rejectedReducer);
    builder.addCase(getUsersCount.rejected, rejectedReducer);

    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users = action.payload.data;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users.unshift(action.payload.data);
    });
    builder.addCase(getOneUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.currentUser = action.payload.data;
    });
    builder.addCase(getUsersCount.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isFetching = false;
      state.error = null;
      state.usersCount = action.payload;
    });
  },
});

const { reducer } = usersSlice;
export default reducer;
