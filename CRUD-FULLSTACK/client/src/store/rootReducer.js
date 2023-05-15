import { combineReducers } from '@reduxjs/toolkit';

import usersReducer from './usersSlice';
import groupsReducer from './groupsSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  groups: groupsReducer,
});

export default rootReducer;
