import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { createUser } from '../store/usersSlice';
import Error from './Error';
import Loader from './Loader';

const UserForm = () => {
  const { isFetching, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(createUser(values));
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    isMale: true,
  };

  const addUserForm = (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field name="firstName" placeholder="firstName" />
        <Field name="lastName" placeholder="lastName" />
        <Field name="email" placeholder="email" />
        <Field name="password" placeholder="password" />
        <Field name="birthday" placeholder="birthday" />
        <Field name="isMale" type="checkbox" />
        <input type="submit" value="add new user" />
      </Form>
    </Formik>
  );

  return (
    <div className="add-user">
      {isFetching && <Loader />}
      {error && <Error />}
      {!isFetching && !error && addUserForm}
    </div>
  );
};

export default UserForm;
