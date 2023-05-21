import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { createGroup } from '../store/groupsSlice';

const initialValues = {
  title: '',
  image: '',
  description: '',
  userId: '',
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  image: Yup.mixed()
    .required('Image is required')
    .test(
      'fileFormat',
      'Invalid file format. Only PNG, JPG, and JPEG are allowed.',
      (value) => {
        if (!value) return true;
        const supportedFormats = ['image/png', 'image/jpg', 'image/jpeg'];
        return supportedFormats.includes(value.type);
      }
    )
    .test(
      'fileSize',
      'File size should not exceed 1MB',
      (value) => !value || (value && value.size <= 1024 * 1024)
    ),
  description: Yup.string().required('Description is required'),
  userId: Yup.string().required('User ID is required'),
});

const GroupForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    dispatch(createGroup(values));
    formikBag.resetForm();
  };

  return (
    <div className="add-group-form">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formikProps) => {
          return (
            <Form encType="multipart/form-data">
              <div>
                <Field name="title" placeholder="Title" />
              </div>
              <div>
                <Field name="description" placeholder="Description" />
              </div>
              <div>
                <Field name="userId" placeholder="User ID" />
              </div>
              <div>
                <input
                  name="image"
                  type="file"
                  onChange={({ target }) =>
                    formikProps.setFieldValue('image', target.files[0])
                  }
                />
              </div>
              <input type="submit" value="Add New Group" />
              <div>
                <ErrorMessage name="title" component="div" className="error" />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="error"
                />
                <ErrorMessage name="userId" component="div" className="error" />
                <ErrorMessage name="image" component="div" className="error" />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default GroupForm;
