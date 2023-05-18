import React from 'react';

import UserCard from './UserCard';

const UsersList = ({ users, offset, limit }) => {
  return (
    <div className="user-list">
      <ul>
        {users.map((user) => (
          <UserCard user={user} offset={offset} limit={limit} key={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
