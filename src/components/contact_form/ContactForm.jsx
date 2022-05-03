import React from 'react';
import c from './ContactForm.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string()
        .min(50, 'Must be at least 50 characters')
        .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={c.aboutForm}>
      <h3 className={c.formTitle}>Drop me a line</h3>
      <div className={c.inputContainer}>
        <div className={c.inputBox}>
          <input
            type='text'
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            className={c.formInput}
            placeholder='Name'
          />
          {formik.touched.name && formik.errors.name && (
            <div className={c.error}>{formik.errors.name}</div>
          )}
        </div>
        <div className={c.inputBox}>
          <input
            type='text'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            className={c.formInput}
            placeholder='Email'
          />
          {formik.touched.email && formik.errors.email && (
            <div className={c.error}>{formik.errors.email}</div>
          )}
        </div>
      </div>
      <div className={c.textareaBox}>
        <textarea
          className={c.formTextarea}
          name='message'
          value={formik.values.message}
          onChange={formik.handleChange}
          placeholder='Type your message here...'
        ></textarea>
        {formik.touched.message && formik.errors.message && (
          <div className={c.error}>{formik.errors.message}</div>
        )}
      </div>
      <button type='submit' className={c.formButton}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
