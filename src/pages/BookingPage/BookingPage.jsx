// import React from "react";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { addDays, set } from "date-fns";
// import {
//   createBooking,
//   resetBookingState,
// } from "../../redux/slices/bookingSlice";
// import css from "../../pages/BookingPage/BookingPage.module.css";
// import {
//   generateTimeSlots,
//   to24HourFormat,
// } from "../../utils/generateTimeSlots";
// import { holidays } from "../../utils/holidays";
// import axiosInstance from "../../api/axiosInstance";

// // ✅ Валідація
// const BookingSchema = Yup.object().shape({
//   fullName: Yup.string()
//     .max(100, "Full name must not exceed 100 characters")
//     .required("Full name is required"),
//   phone: Yup.string()
//     .matches(/^\+?[0-9\s\-]{7,20}$/, "Invalid phone format")
//     .required("Phone is required"),
//   email: Yup.string().email("Invalid email").optional(),
//   service: Yup.string()
//     .oneOf([
//       "Wheel Alignment",
//       "Tire Change",
//       "Oil Change",
//       "Diagnostics",
//       "Other",
//     ])
//     .required("Select a service"),
//   preferredDate: Yup.date()
//     .min(new Date(), "Date cannot be in the past")
//     .required("Date is required"),
//   preferredTime: Yup.string().required("Time is required"),
//   vehicleModel: Yup.string().required("Vehicle model is required"),
//   vehicleYear: Yup.number()
//     .integer("Year must be a whole number")
//     .min(1900, "Year must be after 1900")
//     .max(new Date().getFullYear() + 1, "Year is too high")
//     .required("Vehicle year is required"),
//   message: Yup.string().max(500, "Message must not exceed 500 characters"),
// });

// export default function BookingPage() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { success, loading, error } = useSelector((state) => state.booking);

//   const [successMessage, setSuccessMessage] = useState("");
//   const [bookedSlots, setBookedSlots] = useState([]);

//   useEffect(() => {
//     dispatch(resetBookingState());
//   }, [dispatch]);

//   useEffect(() => {
//     if (success) {
//       setSuccessMessage(
//         "Booking successful! A confirmation email has been sent."
//       );
//       // Очистити повідомлення через 2 секунд
//       setTimeout(() => setSuccessMessage(""), 2000);
//       setTimeout(() => navigate("/home"), 4000);
//     }
//   }, [success, navigate]);

//   const isDayBlocked = (date) => {
//     const isoDate = date.toISOString().split("T")[0];
//     const day = date.getDay();
//     return day === 0 || holidays.includes(isoDate);
//   };

//   const fetchBookedSlots = async (date) => {
//     if (!date) {
//       setBookedSlots([]);
//       return;
//     }

//     const isoDate = date.toISOString().split("T")[0];

//     try {
//       console.log("Fetching booked slots for date:", isoDate);

//       // ✅ Використовуємо правильний endpoint згідно з вашим API
//       const response = await axiosInstance.get(
//         `/appointments/booked-slots?date=${isoDate}`
//       );

//       console.log("API response:", response.data);

//       if (
//         response.data?.data?.bookedSlots &&
//         Array.isArray(response.data.data.bookedSlots)
//       ) {
//         const bookedTimes = response.data.data.bookedSlots
//           .map((timeStr) => {
//             try {
//               // timeStr має бути в форматі "14:30" (24h)
//               const [hours, minutes] = timeStr.split(":").map(Number);
//               const ampm = hours >= 12 ? "PM" : "AM";
//               const hour12 = hours % 12 || 12;
//               return `${hour12}:${minutes.toString().padStart(2, "0")} ${ampm}`;
//             } catch (err) {
//               console.error("Error parsing time:", timeStr, err);
//               return null;
//             }
//           })
//           .filter(Boolean);

//         console.log("Converted booked times:", bookedTimes);
//         setBookedSlots(bookedTimes);
//       } else {
//         console.log("No booked slots found for date:", isoDate);
//         setBookedSlots([]);
//       }
//     } catch (err) {
//       console.error("Failed to load booked slots:", err);

//       // Якщо endpoint не існує (404), просто встановлюємо порожній масив
//       if (err.response?.status === 404) {
//         console.log("Booked slots endpoint not found, assuming no bookings");
//         setBookedSlots([]);
//       } else {
//         // У випадку інших помилок, не блокуємо інтерфейс
//         setBookedSlots([]);
//       }
//     }
//   };

//   // ✅ Перевірка чи час заблокований
//   const isTimeSlotBooked = (timeSlot) => {
//     return bookedSlots.includes(timeSlot);
//   };

//   return (
//     <div className={css.bookingPage}>
//       <h1 className={css.title}>Book Your Service</h1>

//       {successMessage && <div className={css.success}>{successMessage}</div>}
//       {error && <div className={css.error}>{error}</div>}

//       <Formik
//         initialValues={{
//           fullName: "",
//           phone: "",
//           email: "",
//           service: "",
//           preferredDate: null,
//           preferredTime: "",
//           vehicleModel: "",
//           vehicleYear: "",
//           message: "",
//         }}
//         validationSchema={BookingSchema}
//         onSubmit={async (
//           values,
//           { resetForm, setSubmitting, setFieldError }
//         ) => {
//           try {
//             console.log("Form values before submit:", values);

//             // ✅ Перевірка чи вибраний час не заблокований
//             if (isTimeSlotBooked(values.preferredTime)) {
//               setFieldError(
//                 "preferredTime",
//                 "This time slot is no longer available. Please select another time."
//               );
//               setSubmitting(false);
//               return;
//             }

//             // ✅ Правильна структура payload
//             const payload = {
//               fullName: values.fullName,
//               phone: values.phone,
//               email: values.email || undefined,
//               service: values.service,
//               preferredDate: values.preferredDate.toISOString().split("T")[0],
//               preferredTime: to24HourFormat(values.preferredTime),
//               vehicle: {
//                 model: values.vehicleModel,
//                 year: Number(values.vehicleYear),
//               },
//               message: values.message || undefined,
//             };

//             console.log("Payload to send:", payload);

//             const result = await dispatch(createBooking(payload));

//             console.log("Booking result:", result);

//             if (result.type.endsWith("fulfilled")) {
//               resetForm();
//               // Оновити список заброньованих слотів
//               if (values.preferredDate) {
//                 await fetchBookedSlots(values.preferredDate);
//               }
//             }
//           } catch (err) {
//             console.error("Booking error:", err);
//           } finally {
//             setSubmitting(false);
//           }
//         }}
//       >
//         {({ values, setFieldValue, isSubmitting }) => (
//           <Form className={css.form}>
//             {/* Full name */}
//             <div className={css.formGroup}>
//               <label>Full Name *</label>
//               <Field name="fullName" placeholder="Enter your name" />
//               <ErrorMessage
//                 name="fullName"
//                 component="div"
//                 className={css.error}
//               />
//             </div>

//             {/* Phone */}
//             <div className={css.formGroup}>
//               <label>Phone *</label>
//               <Field name="phone" placeholder="+380671234567" />
//               <ErrorMessage
//                 name="phone"
//                 component="div"
//                 className={css.error}
//               />
//             </div>

//             {/* Email */}
//             <div className={css.formGroup}>
//               <label>Email (optional)</label>
//               <Field
//                 name="email"
//                 type="email"
//                 placeholder="example@email.com"
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className={css.error}
//               />
//             </div>

//             {/* Vehicle */}
//             <div className={css.formGroup}>
//               <label>Vehicle Model *</label>
//               <Field name="vehicleModel" placeholder="e.g. Toyota Camry" />
//               <ErrorMessage
//                 name="vehicleModel"
//                 component="div"
//                 className={css.error}
//               />
//             </div>

//             <div className={css.formGroup}>
//               <label>Vehicle Year *</label>
//               <Field name="vehicleYear" placeholder="e.g. 2020" type="number" />
//               <ErrorMessage
//                 name="vehicleYear"
//                 component="div"
//                 className={css.error}
//               />
//             </div>

//             {/* Service */}
//             <div className={css.formGroup}>
//               <label>Service *</label>
//               <Field as="select" name="service">
//                 <option value="">Select a service</option>
//                 <option value="Wheel Alignment">Wheel Alignment</option>
//                 <option value="Tire Change">Tire Change</option>
//                 <option value="Oil Change">Oil Change</option>
//                 <option value="Diagnostics">Diagnostics</option>
//                 <option value="Other">Other</option>
//               </Field>
//               <ErrorMessage
//                 name="service"
//                 component="div"
//                 className={css.error}
//               />
//             </div>

//             {/* Date */}
//             <div className={css.formGroup}>
//               <label>Choose Date *</label>
//               <DatePicker
//                 selected={values.preferredDate}
//                 onChange={(date) => {
//                   setFieldValue("preferredDate", date);
//                   setFieldValue("preferredTime", ""); // Скинути час при зміні дати
//                   fetchBookedSlots(date);
//                 }}
//                 filterDate={(date) => !isDayBlocked(date)}
//                 minDate={new Date()}
//                 maxDate={addDays(new Date(), 30)}
//                 dateFormat="yyyy-MM-dd"
//                 placeholderText="Select a date"
//                 className={css.datePicker}
//               />
//               <ErrorMessage
//                 name="preferredDate"
//                 component="div"
//                 className={css.error}
//               />
//             </div>

//             {/* Time */}
//             <div className={css.formGroup}>
//               <label>Choose Time *</label>
//               <Field
//                 as="select"
//                 name="preferredTime"
//                 disabled={!values.preferredDate}
//               >
//                 <option value="">Select a time</option>
//                 {values.preferredDate &&
//                   generateTimeSlots(values.preferredDate).map((slot) => (
//                     <option
//                       key={slot}
//                       value={slot}
//                       disabled={isTimeSlotBooked(slot)}
//                     >
//                       {slot} {isTimeSlotBooked(slot) ? "(Booked)" : ""}
//                     </option>
//                   ))}
//               </Field>
//               <ErrorMessage
//                 name="preferredTime"
//                 component="div"
//                 className={css.error}
//               />
//             </div>

//             {/* Message */}
//             <div className={css.formGroup}>
//               <label>Message (optional)</label>
//               <Field
//                 as="textarea"
//                 name="message"
//                 placeholder="Any additional details..."
//                 maxLength={500}
//               />
//               <ErrorMessage
//                 name="message"
//                 component="div"
//                 className={css.error}
//               />
//             </div>

//             <button
//               type="submit"
//               className={css.submitBtn}
//               disabled={loading || isSubmitting}
//             >
//               {loading || isSubmitting ? "Booking..." : "Book Now"}
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }
