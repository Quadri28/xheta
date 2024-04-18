import React, { useState } from "react";
import "./WaitList.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import ErrorText from "./ErrorText";
import axios from "./axios";

const WaitlistReg = () => {
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
  };

  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/;
  const validationSchema = Yup.object({
    email: Yup.string().email().required().label("Email"),
    firstName: Yup.string().min(3).required().label("First Name"),
    lastName: Yup.string().min(3).required().label("Last Name"),
    phoneNumber: Yup.string()
      .matches(phoneRegex)
      .required()
      .label("Phone Number"),
    gender: Yup.string().required().label("Gender"),
  });

  const onSubmit = (values, actions) => {
    const payload = {
      email: values.email,
      first_name: values.firstName,
      last_name: values.lastName,
      phone_number: values.phoneNumber,
      gender: values.gender,
    };
    axios
      .post("waiting-list", payload)
      .then(() =>{
        toast('Your registration was successful', {
          type: "success",
          pauseOnHover: true,
          autoClose: true,
        })
        actions.resetForm()
      }
      )
      .catch((error) => {
        toast(error.response.data.message, {
          type: "error",
          autoClose: false,
          pauseOnHover: true,
        });
      });
      actions.resetForm()
  };
  return (
    <div className="card p-4 form-wrapper">
      <div className="d-flex justify-content-end">
        <button
          style={{ marginBottom: "1rem" }}
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
        ></button>
      </div>
      <h3>Join the Xheta Waitlist for Exclusive Benefits</h3>
      <p>
        Sign up for our waitlist today and be part of an educational experience
        that knows no boundaries! Kindly fill the form below to register your
        interest.
      </p>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="form-container d-flex flex-column mx-auto">
            <div className="d-flex flex-column gap-1">
              <label htmlFor="email" className="text-start">
                Email
              </label>
              <Field type="text" name="email" />
              <ErrorMessage name="email" component={ErrorText} />
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="firstName" className="text-start">
                First Name
              </label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component={ErrorText} />
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="lastName" className="text-start">
                Last Name
              </label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" component={ErrorText} />
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="phoneNumber" className="text-start">
                Phone no
              </label>
              <Field type="text" name="phoneNumber" />
              <ErrorMessage name="phoneNumber" component={ErrorText} />
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="gender" className="text-start">
                Gender
              </label>
              <Field type="text" name="gender" as="select">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer not to say">Prefer no to say</option>
              </Field>
              <ErrorMessage name="gender" component={ErrorText} />
            </div>
            <div className="d-flex mt-3">
              <button
                className="btn btn-md w-100 text-white"
                type="submit"
                style={{ backgroundColor: "#03363D" }}
              >
                Register your interest
              </button>
            </div>
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default WaitlistReg;
