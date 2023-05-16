import React from 'react';

import UserCard from './UserCard';

const UsersList = ({ users }) => {
  return (
    <div className="user-list">
      <ul>
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
