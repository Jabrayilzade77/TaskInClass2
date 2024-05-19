import React from "react";
import { Formik } from "formik";
import { Routes, Route, useParams } from 'react-router-dom';

import * as Yup from 'yup';
function AddEmployee() {
  // const [inpId, setInpId] = useState("");
  // const [inpImgUrl, setInpImgUrl] = useState("");
  // const [inpTitle, setInpTitle] = useState("");
  // const [inpPrice, setInpPrice] = useState("");
  // const [inpCategory, setInpCategory] = useState("");

  // const [inpArr, setInpArr] = useState([]);

  // async function addProduct() {
  //   const res = await fetch("http://localhost:3000/myApi", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: values.id,
  //       image: values.image,
  //       // title: inpTitle,
  //       // price: inpPrice,
  //       // category: inpCategory,
  //     }),
  //   });
  //   console.log(res);
  // }

  // function formSubmit(e) {
  //   e.preventDefault();
  //   addProduct();
  //   setInpArr();

  //   setInpId("");
  //   setInpImgUrl("");
  //   setInpTitle("");
  //   setInpPrice("");
  //   setInpCategory("");
  // }

  return (
    <>
      {/* <form action="" onSubmit={formSubmit}>
        <input
          type="text"
          value={inpId}
          onChange={(e) => setInpId(e.target.value)}
          placeholder="id"
        />
        <input
          type="text"
          value={inpImgUrl}
          onChange={(e) => setInpImgUrl(e.target.value)}
          placeholder="imgurl"
        />
        <input
          type="text"
          value={inpTitle}
          onChange={(e) => setInpTitle(e.target.value)}
          placeholder="title"
        />
        <input
          type="text"
          value={inpPrice}
          onChange={(e) => setInpPrice(e.target.value)}
          placeholder="price"
        />
        <input
          type="text"
          value={inpCategory}
          onChange={(e) => setInpCategory(e.target.value)}
          placeholder="category"
        />
        <button>add</button>
      </form> */}

<Formik
       initialValues={{ id: '', image: '', title: '' ,price:'',category:''}}
       validationSchema={Yup.object({
         id: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         image: Yup.string()
           .required('Required'),
         title: Yup.string().max(15, 'Must be 15 characters or less')
         .required('Required'),
         price: Yup.string().max(15, 'Must be 15 characters or less')
         .required('Required'),
         category: Yup.string().max(15, 'Must be 15 characters or less')
         .required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {

async function getAllProducts() {
  const res = fetch("http://localhost:3000/myApi/"+id,{method:'put',
  headers: {
    "Content-Type": "application/json",
  },
  body:JSON.stringify(values )
})
const data = res.json()

}

getAllProducts()
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {formik => (
         <form onSubmit={formik.handleSubmit}>
           <label htmlFor="id">Id</label>
           <input
             id="id"
             type="text"
             {...formik.getFieldProps('id')}
           />
           {formik.touched.id && formik.errors.id ? (
             <div>{formik.errors.id}</div>
           ) : null}
 
           <label htmlFor="image">ImageUrl</label>
           <input
             id="image"
             type="text"
             {...formik.getFieldProps('image')}
           />
           {formik.touched.image && formik.errors.image ? (
             <div>{formik.errors.image}</div>
           ) : null}
 
           <label htmlFor="title">title </label>
           <input id="title" type="title" {...formik.getFieldProps('title')} />
           {formik.touched.title && formik.errors.title ? (
             <div>{formik.errors.title}</div>
           ) : null}

           <label htmlFor="price">Price</label>
           <input
             id="price"
             type="text"
             {...formik.getFieldProps('price')}
           />
           {formik.touched.price && formik.errors.price ? (
             <div>{formik.errors.price}</div>
           ) : null}
           
           <label htmlFor="category">category</label>
           <input
             id="category"
             type="text"
             {...formik.getFieldProps('category')}
           />
           {formik.touched.category && formik.errors.category ? (
             <div>{formik.errors.category}</div>
           ) : null}
 
           <button type="submit">Submit</button>
         </form>
       )}
     </Formik>
    </>
  );
}

export default AddEmployee;
