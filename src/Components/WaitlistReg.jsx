import React, { useState } from "react";
import "./WaitList.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import ErrorText from "./ErrorText";
import axios from "./axios";
import {FaCheckCircle} from 'react-icons/fa'
import Modal from 'react-modal'
import CopyToClipboard from "react-copy-to-clipboard";
import { BsCopy } from "react-icons/bs";
import { LiaTimesCircle } from "react-icons/lia";

const WaitlistReg = () => {

  const [openModal, setOpenModal]= useState(false)
  const [copied, setCopied]= useState(false)

  const modalIsOpen =()=>{
    setOpenModal(true)
  }

  const closeModal =()=>{
    setOpenModal(false)
  }
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
  };

  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/
  const validationSchema = Yup.object({
    email: Yup.string().email().required().label("Email"),
    firstName: Yup.string().min(3).required().label("First Name"),
    lastName: Yup.string().min(3).required().label("Last Name"),
    phoneNumber: Yup.string()
      .matches(phoneRegex, 'Invalid phone number')
      .required(),
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
       modalIsOpen()
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

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "2rem",
      width: "320px",
      overFlowY: "scroll",
      zIndex: 9999,
    },
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
            <div className="d-flex mt-3" data-bs-dismiss='modal'>
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
      <Modal
          isOpen={openModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
        <div className="d-flex justify-content-end mb-3">
            <LiaTimesCircle onClick={()=>closeModal()} style={{cursor:'pointer', fontSize:'20px', color:'#ddd'}}/>
        </div>
          <div className="text-center">
            <span> <FaCheckCircle style={{fontSize:'30px'}} className="text-success mb-2"/></span>
            <p style={{color:'#1d1d1d', fontSize:'18px'}}>You have created your account successfully</p>
            <p>Skip ahead in line by referring your friends using this link below</p>
            <div>https://www.xheta.com 
            <CopyToClipboard text="https://www.xheta.com" onCopy={()=>setCopied(true)}>
            <BsCopy style={{marginLeft:'5px', cursor:'pointer'}} />
            </CopyToClipboard>
           <p> {copied ? 'Copied' : '' } </p>
            </div>
            <button to='/dashboard' onClick={()=>closeModal()}className="btn w-100 mt-2"
             style={{fontWeight:'700', color:'#686868',
              borderRadius:'12px', border:'solid 1px #ddd'}}>
              Dismiss</button>
          </div>
        </Modal>
    </div>
  );
};

export default WaitlistReg;
