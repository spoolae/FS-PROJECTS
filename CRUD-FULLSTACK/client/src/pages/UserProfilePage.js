import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { FaEnvelope, FaCalendar, FaUser } from 'react-icons/fa';

import userAvatar from '../images/user-avatar.png';
import Error from '../components/Error';
import Loader from '../components/Loader';
import { getOneUser } from '../store/usersSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { idUser } = useParams();

  useEffect(() => {
    dispatch(getOneUser(Number(idUser)));
  }, [dispatch, idUser]);

  const { currentUser, error, isFetching } = useSelector(
    (state) => state.users
  );

  const profileContent = (
    <div>
      <div className="profile-content">
        <img src={userAvatar} alt="user" />
        {currentUser && (
          <h3>
            {currentUser.firstName} {currentUser.lastName}
          </h3>
        )}
        {currentUser && (
          <p>
            <FaEnvelope /> {currentUser.email}
          </p>
        )}
        {currentUser && (
          <p>
            <FaCalendar /> {currentUser.birthday}
          </p>
        )}
        {currentUser && (
          <p>
            <FaUser /> {currentUser.isMale ? 'Male' : 'Female'}
          </p>
        )}
      </div>
      <Link to="/users" className="button">
        Turn Back
      </Link>
    </div>
  );

  return (
    <div className="user-profile">
      {isFetching && <Loader />}
      {error && <Error />}
      {!isFetching && !error && currentUser && profileContent}
    </div>
  );
};

export default UserProfile;
