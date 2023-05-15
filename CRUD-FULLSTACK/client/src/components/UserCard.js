import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <li key={user.id}>
      <div>
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <p>{user.email}</p>
        <Link to={`/users/${user.id}`}>show profile</Link>
        <button>delete user</button>
      </div>
    </li>
  );
};

export default UserCard;
