import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UsersList from '../components/UsersList';
import Loader from './../components/Loader';
import { getAllUsers, getUsersCount } from '../store/usersSlice';
import Error from '../components/Error';
import PaginationButtons from '../components/PaginationButtons';

const ITEMS_PER_PAGE = 5;

const UsersPage = () => {
  const dispatch = useDispatch();
  const { isFetching, error, users, usersCount } = useSelector(
    (state) => state.users
  );
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(getAllUsers({ limit: ITEMS_PER_PAGE, offset }));
    dispatch(getUsersCount());
  }, [dispatch, offset]);

  const handlePrevPage = () => {
    if (offset - ITEMS_PER_PAGE >= 0) {
      setOffset(offset - ITEMS_PER_PAGE);
    }
  };

  const handleNextPage = () => {
    if (offset + ITEMS_PER_PAGE < usersCount) {
      setOffset(offset + ITEMS_PER_PAGE);
    }
  };

  return (
    <div>
      {isFetching && <Loader />}
      {error && <Error />}
      {!isFetching && !error && (
        <div>
          <UsersList users={users} offset={offset} limit={ITEMS_PER_PAGE} />
          <PaginationButtons
            offset={offset}
            usersCount={usersCount}
            onPrevPage={handlePrevPage}
            onNextPage={handleNextPage}
            itemsPerPage={ITEMS_PER_PAGE}
          />
        </div>
      )}
    </div>
  );
};

export default UsersPage;
