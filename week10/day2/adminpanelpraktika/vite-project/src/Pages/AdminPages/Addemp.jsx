import React from "react";
import { Formik } from "formik";

function AddEmployee() {
  return (
    <Formik
      initialValues={{
        id: "",
        image: "",
        title: "",
        price: "",
        category: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.id) {
          errors.id = "Required";
        }
        // Add more validation rules if needed
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const res = await fetch("http://localhost:3000/myApi", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
          if (res.ok) {
            alert("Employee added successfully!");
          } else {
            alert("Failed to add employee");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Failed to add employee");
        }
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="id"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.id}
            placeholder="ID"
          />
          {errors.id && touched.id && <div>{errors.id}</div>}
          <input
            type="text"
            name="image"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image}
            placeholder="Image URL"
          />
          {errors.image && touched.image && <div>{errors.image}</div>}
          {/* Add other input fields here */}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}

export default AddEmployee;
