// import React, { useState } from "react";
// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginAdmin } from "../../redux/slices/loginAdminSlice";
// import css from "../../pages/AdminLoginPage/AdminLoginPage.module.css";
// const LoginSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string().required("Required"),
// });

// export default function AdminLoginPage() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error, isAuthenticated } = useSelector(
//     (state) => state.adminAuth
//   );

//   // ✅ редірект при успішному логіні
//   useEffect(() => {
//     console.log("Effect: isAuthenticated =", isAuthenticated);
//     if (isAuthenticated) {
//       navigate("/admin");
//     }
//   }, [isAuthenticated, navigate]);

//   return (
//     <div className={css.loginPage}>
//       <h1>Admin Login</h1>

//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validationSchema={LoginSchema}
//         onSubmit={(values, { setSubmitting }) => {
//           dispatch(loginAdmin(values)).then((res) => {
//             if (res.meta.requestStatus === "fulfilled") {
//               navigate("/admin");
//             }
//             setSubmitting(false);
//           });
//         }}
//       >
//         {() => (
//           <Form className={css.form}>
//             <div className={css.formGroup}>
//               <label>Email</label>
//               <Field name="email" type="email" />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className={css.error}
//               />
//             </div>

//             <div className={css.formGroup}>
//               <label>Password</label>
//               <Field name="password" type="password" />
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 className={css.error}
//               />
//             </div>

//             {error && <div className={css.error}>{error}</div>}

//             <button type="submit" disabled={loading}>
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }
