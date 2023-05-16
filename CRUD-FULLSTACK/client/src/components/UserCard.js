import React from 'react';
import { useNavigate } from 'react-router-dom';

import userAvatar from '../images/user-avatar.png';
import { FaTimes, FaUserEdit } from 'react-icons/fa';

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const handleOpenUser = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <li className="user-card">
      <div>
        <div className="user-avatar" onClick={handleOpenUser}>
          <img src={userAvatar} alt="user" />
        </div>
        <div>
          <h3 onClick={handleOpenUser}>
            {user.firstName} {user.lastName}
          </h3>
          <p>{user.email}</p>
        </div>
      </div>
      <div>
        <div>
          <FaUserEdit className="icon" id="blue" />
        </div>
        <div>
          <FaTimes className="icon" id="red" />
        </div>
      </div>
    </li>
  );
};

export default UserCard;
