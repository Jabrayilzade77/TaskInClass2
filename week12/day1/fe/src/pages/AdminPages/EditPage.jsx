import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";

function EditPage() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  async function getOneData() {
    const res = await fetch("http://localhost:3000/yusif/" + id);
    const mydata = await res.json();
    setData(mydata);
  }


useEffect(() => {
datalar()
}, [])

  async function datalar() {
    const datalars = await getOneData(id)
    setData(datalars)
  }


  return (
    <>
      {

        
        <>
        {console.log(data)}
{
            data && <Formik
     
            initialValues={{
              title: data.title,
              image: data.image,
              price: data.price
            }}
            validationSchema={Yup.object({
              title: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
              image: Yup.string().required("Required"),
              price: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              async function getAddProducts() {
                const res = await fetch("http://localhost:3000/yusif/" + id, {
                  method: "put",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    title: values.title,
                    image: values.image,
                    price: values.price,
                  }),
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
    
        
            <Form>
              <label htmlFor="title">title</label>
              <Field name="title" type="text" />
              <ErrorMessage name="title" />
    
              <label htmlFor="image">image</label>
              <Field name="image" type="text" />
              <ErrorMessage name="image" />
    
              <label htmlFor="price">price </label>
              <Field name="price" type="text" />
              <ErrorMessage name="price" />
    
              <button type="submit">Submit</button>
            </Form>
          </Formik>
}
        
        
        </>
      }
    </>
  );
}

export default EditPage;
