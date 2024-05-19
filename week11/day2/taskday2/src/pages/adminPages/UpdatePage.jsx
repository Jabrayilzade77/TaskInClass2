import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useParams,useNavigate  } from "react-router-dom";

function UpdatePage() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [updateProduct, setUpdateProduct] = useState(null)

 useEffect(() => {
   fetch("http://localhost:3000/myApi/"+id)
   .then(res=>res.json())
   .then(data =>setUpdateProduct(data))
 }, [])
 

 
  return (
    <>
      {
        updateProduct && 
        

        <>
        <Formik
        initialValues={{ image: updateProduct.image, title: updateProduct.title, price: updateProduct.price }}
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
              const res = await fetch("http://localhost:3000/myApi/" + id, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              });
              const data = await res.json();
              navigate("/employees") 
            }
            getPostProduct();
            console.log(id);
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
      </Formik></>
      }
    </>
  );
}

export default UpdatePage;
