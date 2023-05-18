import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaUserEdit, FaCheck, FaTimesCircle } from 'react-icons/fa';

import userAvatar from '../images/user-avatar.png';
import { useDispatch } from 'react-redux';
import { deleteUser, getAllUsers, updateUser } from '../store/usersSlice';

const UserCard = ({ user, offset, limit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const handleOpenUser = () => {
    navigate(`/users/${user.id}`);
  };

  const handleDeleteUser = () => {
    dispatch(deleteUser(user.id));
    dispatch(getAllUsers({ limit: limit + 1, offset: offset }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    const updatedUser = {
      ...user,
      firstName: firstName,
      lastName: lastName,
    };
    dispatch(updateUser(updatedUser));
    setEditing(false);
  };

  const handleCancelClick = () => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEditing(false);
  };

  const editContent = (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
  );

  const defaultContent = (
    <h3 onClick={handleOpenUser}>
      {user.firstName} {user.lastName}
    </h3>
  );

  const editButtons = (
    <div className="buttons">
      <FaCheck className="icon" id="green" onClick={handleSaveClick} />
      <FaTimesCircle className="icon" id="red" onClick={handleCancelClick} />
    </div>
  );

  const defaultButtons = (
    <div className="buttons">
      <FaUserEdit className="icon" id="blue" onClick={handleEditClick} />
      <FaTimes className="icon" id="red" onDoubleClick={handleDeleteUser} />
    </div>
  );

  return (
    <li className="user-card">
      <div>
        <div className="user-avatar" onClick={handleOpenUser}>
          <img src={userAvatar} alt="user" />
        </div>
        <div>
          {editing ? editContent : defaultContent}
          <p>{user.email}</p>
        </div>
      </div>
      <div>{editing ? editButtons : defaultButtons}</div>
    </li>
  );
};

export default UserCard;
