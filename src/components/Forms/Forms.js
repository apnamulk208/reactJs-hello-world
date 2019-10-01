import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';





class Forms extends Component {

    render() {
     const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email')
          .required('Required'),
      });
    return (
  <div>
  <h1>Formik in your app Without YUP!</h1>
  <Formik
    initialValues={{ email: '', password: '' }}
    validate = {values => {
      debugger
      let errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Required';
      }
      return errors;
    }}
    debugger
    onSubmit={(values, { setSubmitting }) => {
      debugger
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({      values,      errors,      touched,
      handleChange,      handleBlur,      handleSubmit,      isSubmitting,
      /* and other goodies */
    }) => (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && errors.email}
        <br/>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && errors.password}
        <br/>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    )}
  </Formik>

  <h1>Formik in your app With YUP!</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>


</div>
    );
  }



}

export default Forms;