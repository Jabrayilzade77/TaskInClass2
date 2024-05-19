import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Add.module.scss";

function AddEmployees() {
  return (
    <>
      <Formik 
        initialValues={{ title: "", image: "", price: "" }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          image: Yup.string().required("Required"),
          price: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          async function getAddProducts() {
            const res = await fetch("http://localhost:3000/yusif", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
            const data = await res.json();
          }

          getAddProducts();
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className={styles.form}>
          <label htmlFor="title">title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="image">image</label>
          <Field name="image" type="img" />
          <ErrorMessage name="image" />

          <label htmlFor="price">price </label>
          <Field name="price" type="price" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default AddEmployees;
