import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import css from "./QuickEstimateSection.module.css";

const carBrands = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Nissan",
  "BMW",
  "Mercedes",
  "Audi",
  "Hyundai",
  "Kia",
  "Volkswagen",
  "Subaru",
  "Mazda",
  "Lexus",
  "Jeep",
  "GMC",
  "Dodge",
  "Ram",
  "Volvo",
  "Porsche",
  "Tesla",
  "Acura",
  "Infiniti",
  "Mitsubishi",
  "Land Rover",
  "Jaguar",
  "Mini",
  "Fiat",
  "Alfa Romeo",
  "Suzuki",
  "Peugeot",
  "Renault",
  "Skoda",
  "Citroen",
  "Opel",
  "Saab",
  "Chrysler",
  "Bentley",
  "Rolls-Royce",
];

export default function QuickEstimateSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearsArr = [];
    for (let y = currentYear; y >= 1990; y--) {
      yearsArr.push(y);
    }
    setYears(yearsArr);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      carBrand: "",
      carModel: "",
      carYear: "",
      serviceType: "",
      message: "",
      privacy: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      phone: Yup.string()
        .matches(
          /^[0-9+\s()-]{7,20}$/,
          "Invalid phone. Use digits and optional +, spaces, - , ()",
        )
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      carBrand: Yup.string().required("Required"),
      carModel: Yup.string().required("Required"),
      carYear: Yup.string()
        .matches(/^\d{4}$/, "Enter 4 digits (ex. 2020)")
        .required("Required"),
      serviceType: Yup.string().required("Required"),
      message: Yup.string(),
      privacy: Yup.boolean().oneOf(
        [true],
        "You must accept the Privacy Policy",
      ),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          values,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsModalOpen(true);
            resetForm();
          },
          (error) => {
            console.log(error.text);
            alert("Something went wrong. Please try again.");
          },
        );
    },
  });

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Get a quick quote</h2>

        <div className={css.grid}>
          <div className={css.info}>
            {/* <h3 className={css.infoTitle}>Get a fast estimate</h3> */}
            <p className={css.infoText}>
              Tell us a little bit more about your vehicle and some more details
              about the problem! You have our promise, a quick estimate will be
              sent to you within 24 hours.
            </p>
          </div>

          <form className={css.form} onSubmit={formik.handleSubmit}>
            <div className={css.row}>
              <label>Name</label>
              <input
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.errors.name && formik.touched.name && (
                <div className={css.error}>{formik.errors.name}</div>
              )}
            </div>

            <div className={css.row}>
              <label>Phone</label>
              <input
                name="phone"
                placeholder="+1 (123) 456-7890"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.errors.phone && formik.touched.phone && (
                <div className={css.error}>{formik.errors.phone}</div>
              )}
            </div>

            <div className={css.row}>
              <label>Email</label>
              <input
                name="email"
                aria-invalid={formik.errors.email ? "true" : "false"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && (
                <div className={css.error}>{formik.errors.email}</div>
              )}
            </div>

            <div className={css.row}>
              <label>Car Brand</label>
              <input
                name="carBrand"
                list="brands"
                placeholder="Start typing..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.carBrand}
              />
              <datalist id="brands">
                {carBrands.map((b) => (
                  <option key={b} value={b} />
                ))}
              </datalist>
              {formik.errors.carBrand && formik.touched.carBrand && (
                <div className={css.error}>{formik.errors.carBrand}</div>
              )}
            </div>

            <div className={css.row}>
              <label>Car Model</label>
              <input
                name="carModel"
                placeholder="e.g. Camry"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.carModel}
              />
              {formik.errors.carModel && formik.touched.carModel && (
                <div className={css.error}>{formik.errors.carModel}</div>
              )}
            </div>

            <div className={css.row}>
              <label>Car Year</label>
              <input
                name="carYear"
                list="years"
                placeholder="2020"
                pattern="\d{4}"
                title="Enter 4 digits (ex. 2020)"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.carYear}
              />
              <datalist id="years">
                {years.map((y) => (
                  <option key={y} value={y} />
                ))}
              </datalist>
              {formik.errors.carYear && formik.touched.carYear && (
                <div className={css.error}>{formik.errors.carYear}</div>
              )}
            </div>

            <div className={css.row}>
              <label>Service Type</label>
              <select
                name="serviceType"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.serviceType}
              >
                <option value="">Choose service</option>
                <option value="Alignment">Alignment</option>
                <option value="Suspension">Suspension</option>
                <option value="Brakes">Brakes</option>
                <option value="Tire">Tire</option>
              </select>
              {formik.errors.serviceType && formik.touched.serviceType && (
                <div className={css.error}>{formik.errors.serviceType}</div>
              )}
            </div>

            <div className={css.rowFull}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your question here..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
            </div>

            {/* PRIVACY CHECKBOX */}
            <div className={css.privacyRow}>
              <label className={css.checkboxLabel}>
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formik.values.privacy}
                  onChange={formik.handleChange}
                />

                <span className={css.checkboxText}>
                  By submitting this form, I agree to the{" "}
                  <NavLink
                    to="/privacy-policy"
                    className={css.policyLink}
                    onClick={() => {
                      // Принудительно записываем, чтобы новая вкладка уже видела "true"
                      localStorage.setItem("cookiesAccepted", "true");

                      // Генерируем событие storage, чтобы баннер в текущей вкладке тоже скрылся
                      window.dispatchEvent(new Event("storage"));
                    }}
                  >
                    Privacy Policy
                  </NavLink>
                </span>
              </label>
              {formik.errors.privacy && formik.touched.privacy && (
                <div className={css.error}>{formik.errors.privacy}</div>
              )}
            </div>
            <div className={css.btnRow}>
              <button
                className={css.btn}
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Get Estimate
              </button>

              <button
                className={css.resetBtn}
                type="button"
                onClick={() => formik.resetForm()}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className={css.modalBackdrop}
          onClick={() => setIsModalOpen(false)}
        >
          <div className={css.modal} onClick={(e) => e.stopPropagation()}>
            <h3>Thank you!</h3>
            <p>Your request has been sent. We will contact you soon.</p>
            <button
              className={css.modalBtn}
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
