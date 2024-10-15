import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Signup = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2">Username</label>
              <Field type="text" id="username" name="username" className="w-full p-2 border border-gray-300 rounded" />
              <ErrorMessage name="username" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <Field type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">Password</label>
              <Field type="password" id="password" name="password" className="w-full p-2 border border-gray-300 rounded" />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
              <Field type="password" id="confirmPassword" name="confirmPassword" className="w-full p-2 border border-gray-300 rounded" />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign Up</button>
          </Form>
        </Formik>
        <div className="mt-4">
          <Link to="/login" className="text-blue-500">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
