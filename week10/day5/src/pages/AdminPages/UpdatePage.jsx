import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

function UpdatePage() {

    let { id} = useParams();
    const navigate = useNavigate();

    const [products, setproducts] = useState(null)

    useEffect(() => {
        fetch("https://6634ce589bb0df2359a2cd82.mockapi.io/yusif/"+id)
        .then((res)=>res.json())
        .then((data)=> setproducts(data))

    }, [])
    


  console.log(products)

  return (
    <>
    {
        products && 
        <>
        <Formik
      initialValues={{ id: products.id, img: products.img, title: products.title, price: products.price }}
      validationSchema={Yup.object({
        id: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        img: Yup.string()
          .required("Required"),
        title: Yup.string()
          .required("Required"),
        price: Yup.number()
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          async function getAllProducts() {
            const res = fetch("https://6634ce589bb0df2359a2cd82.mockapi.io/yusif/"+id,{method:'put',
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(values )
        })
            const data = res.json()
            
          }
          getAllProducts()
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);

        navigate("/admin/employees")

        }, 0);
      }}
    >
      <Form>
        <label htmlFor="id">id</label>
        <Field name="id" type="text" />
        <ErrorMessage name="id" />

        <label htmlFor="img">img url</label>
        <Field name="img" type="text" />
        <ErrorMessage name="img" />

        <label htmlFor="title">title</label>
        <Field name="title" type="title" />
        <ErrorMessage name="title" />

        <label htmlFor="price">price </label>
        <Field name="price" type="number" />
        <ErrorMessage name="price" />

        <button type="submit">Submit</button>
      </Form>
    </Formik></>
    }
  </>
  )
}

export default UpdatePage