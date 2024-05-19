import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddEmployees() {
  return (
    <>
      <Formik
        initialValues={{ image: "", title: "", price: "" }}
        validationSchema={Yup.object({
          image: Yup.string().required("Required"),
          title: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          price: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            async function getPostProduct() {
              const res = await fetch("http://localhost:3000/myApi", {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(values),
              });
            }
            getPostProduct();
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="image">image</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="title">title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="price">price</label>
          <Field name="price" type="price" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default AddEmployees;
