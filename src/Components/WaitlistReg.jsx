import React, { useState } from "react";
import "./WaitList.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import { LiaTimesSolid } from "react-icons/lia";

const WaitlistReg = () => {
    
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
  };

  const validationSchema= Yup.object({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
  })

  const onSubmit = (values) => {
    const payload = {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      gender: values.gender,
    };
    console.log(values)
  };
  return (
    <div className="card p-4 form-wrapper">
      <div className="d-flex justify-content-end">
        <button style={{marginBottom:'1rem'}} type="button" className="btn-close" data-bs-dismiss='modal'>
        </button>
      </div>
        <h3>Join the Xheta Waitlist for Exclusive Benefits</h3>
      <p>
        Sign up for our waitlist today and be part of an educational experience
        that knows no boundaries! Kindly fill the form below to register your
        interest.
      </p>
      <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      <Form >
        <div className="form-container d-flex flex-column mx-auto">
        <div className="d-flex flex-column gap-1">
            <label htmlFor="email" className="text-start">Email</label>
        <Field type="text" name="email" />
        </div>
        <div className="d-flex flex-column gap-1">
            <label htmlFor="firstName" className="text-start">First Name</label>
        <Field type="text" name="firstName" />
        </div>
        <div className="d-flex flex-column gap-1">
            <label htmlFor="lastName" className="text-start">Last Name</label>
        <Field type="text" name="lastName" />
        </div>
        <div className="d-flex flex-column gap-1">
            <label htmlFor="phoneNumber" className="text-start">Phone no</label>
        <Field type="text" name="phoneNumber" />
        </div>
        <div className="d-flex flex-column gap-1">
            <label htmlFor="gender" className="text-start">Gender</label>
        <Field type="text" name="gender" as='select'>
          <option value="">Select</option>
        </Field>
        </div>
        <div className="d-flex mt-3">
            <button className="btn btn-md w-100 text-white" type="button"
            style={{backgroundColor:'#03363D'}}>Register your interest</button>
        </div>
        </div>
      </Form>
      </Formik>
    </div>
  );
};

export default WaitlistReg;
