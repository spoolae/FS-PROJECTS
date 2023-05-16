import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UsersList from '../components/UserList';
import Loader from './../components/Loader';
import { getAllUsers, getUsersCount } from '../store/usersSlice';
import Error from '../components/Error';

const UsersPage = () => {
  const dispatch = useDispatch();
  const { isFetching, error, users, usersCount } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(getAllUsers({ limit: 5, offset: 0 }));
    dispatch(getUsersCount());
  }, [dispatch]);

  return (
    <div>
      {isFetching && <Loader />}
      {error && <Error />}
      {!isFetching && !error && <UsersList users={users} />}
    </div>
  );
};

export default UsersPage;
