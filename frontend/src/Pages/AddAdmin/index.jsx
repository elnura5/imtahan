import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
export const AddAdmin = () => {
  return (
    <Formik
      initialValues={{ name: '', price: '', image: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Required'),
        price: Yup.number()
          .required('Required'),
          image: Yup.string()
          .required('Required'),
      })}
      onSubmit={(values) => {
        axios.post("http://localhost:3000/vegetables",values,{
          title: 'Axios POST Request',
          body: 'This is a sample POST request using Axios.',
          userId: 1,
        } )
        .then((response) => {
          console.log('Data sent successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error:', error.message);
        });
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name"> Name</label>
          <input
            id="name"
            type="text"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <label htmlFor="price"> Price</label>
          <input
            id="price"
            type="number"
            {...formik.getFieldProps('price')}
          />
          {formik.touched.price && formik.errors.price ? (
            <div>{formik.errors.price}</div>
          ) : null}

          <label htmlFor="image">image</label>
          <input id="text" type="text" {...formik.getFieldProps('image')} />
          {formik.touched.image && formik.errors.image ? (
            <div>{formik.errors.image}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};