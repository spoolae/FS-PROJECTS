import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { FaUser, FaEnvelope, FaLock, FaCalendar, FaMale } from 'react-icons/fa';
import * as Yup from 'yup';

import userAvatar from '../images/user-avatar.png';
import { createUser } from '../store/usersSlice';
import Error from './Error';
import Loader from './Loader';

const UserForm = () => {
  const { isFetching, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    birthday: Yup.date().required('Birthday is required'),
    isMale: Yup.boolean(),
  });

  const onSubmit = (values) => {
    dispatch(createUser(values));
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    isMale: false,
  };

  const addUserForm = (
    <div className="add-user-form">
      <img src={userAvatar} alt="user" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-row">
            <FaUser />
            <Field name="firstName" placeholder="First Name" />
            <Field name="lastName" placeholder="Last Name" />
            <FaUser />
          </div>
          <div className="form-row">
            <FaEnvelope />
            <Field name="email" placeholder="Email" />
            <Field name="password" placeholder="Password" type="password" />
            <FaLock />
          </div>
          <div className="form-row">
            <FaCalendar />
            <Field name="birthday" placeholder="Birthday" type="date" />
            <Field type="checkbox" name="isMale" />
            <FaMale />
          </div>
          <div className="form-row">
            <input type="submit" value="Add User" />
          </div>
        </Form>
      </Formik>
    </div>
  );

  return (
    <div>
      {isFetching && <Loader />}
      {error && <Error />}
      {!isFetching && !error && addUserForm}
    </div>
  );
};

export default UserForm;
