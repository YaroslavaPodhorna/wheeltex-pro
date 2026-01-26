// import React from "react";
// import { useParams } from "react-router-dom";
// import { services } from "../../data/services";
// import css from "./ServiceDetailPage.module.css";

// export default function ServiceDetailPage() {
//   const { id } = useParams();
//   const service = services.find((s) => s.id === id);

//   if (!service) {
//     return <h2>Service not found</h2>;
//   }

//   return (
//     <section className={css.service}>
//       <img src={service.image} alt={service.title} className={css.image} />

//       <h1>{service.title}</h1>
//       <p>{service.fullDescription}</p>

//       <ul>
//         {service.benefits.map((b, i) => (
//           <li key={i}>✓ {b}</li>
//         ))}
//       </ul>

//       <a href="tel:+1234567890" className={css.callNow}>
//         📞 Call Now to Schedule
//       </a>
//     </section>
//   );
// }

// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { services } from "../../data/services";
// import css from "./ServiceDetailPage.module.css";
// import { FaArrowLeft, FaPhone } from "react-icons/fa";

// export default function ServiceDetailPage() {
//   const { id } = useParams();
//   const service = services.find((s) => s.id === id);
//   const phoneNumber = "+1234567890";

//   if (!service) {
//     return (
//       <div className={css.notFound}>
//         <h2>Service not found</h2>
//         <Link to="/" className={css.backHome}>
//           ← Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className={css.page}>

//       <section
//         className={css.hero}
//         style={{ backgroundImage: `url(${service.image})` }}
//       >
//         <div className={css.heroOverlay}>
//           <div className={css.heroContent}>

//             <h1 className={css.heroTitle}>{service.title}</h1>
//             <p className={css.heroSubtitle}>{service.description}</p>
//           </div>
//         </div>
//       </section>

//       <section className={css.content}>
//         <div className={css.container}>

//           <div className={css.descriptionBlock}>
//             <h2 className={css.sectionTitle}>About This Service</h2>
//             <p className={css.description}>{service.fullDescription}</p>
//           </div>

//           <div className={css.benefitsBlock}>
//             <h2 className={css.sectionTitle}>Key Benefits</h2>
//             <div className={css.benefitsGrid}>
//               {service.benefits.map((benefit, index) => (
//                 <div key={index} className={css.benefitCard}>
//                   <span className={css.checkmark}>✓</span>
//                   <span>{benefit}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className={css.ctaBlock}>
//             <h2 className={css.ctaTitle}>Ready to Schedule?</h2>
//             <p className={css.ctaText}>
//               Call us now to book your {service.title} service
//             </p>
//             <a href={`tel:${phoneNumber}`} className={css.ctaButton}>
//               <FaPhone /> Call Now: {phoneNumber}
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { services } from "../../data/services";
// import css from "./ServiceDetailPage.module.css";
// import { FaPhone, FaArrowLeft } from "react-icons/fa";
// import { div } from "framer-motion/client";

// export default function ServiceDetailPage() {
//   const { id } = useParams();
//   const service = services.find((s) => s.id === id);

//   if (!service) {
//     return (
//       <div className={css.notFound}>
//         <h2>Service not found</h2>
//         <Link to="/" className={css.backHome}>
//           ← Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className={css.container}>
//       <div className={css.page}>
//         {/* Hero Section */}
//         <section
//           className={css.hero}
//           style={{ backgroundImage: `url(${service.heroImage})` }}
//         >
//           <div className={css.heroOverlay}>
//             <div className={css.heroContent}>
//               <Link to="/" className={css.backButton}>
//                 <FaArrowLeft /> Back to Home
//               </Link>
//               <h1 className={css.heroTitle}>{service.title}</h1>
//               <p className={css.heroSubtitle}>{service.description}</p>
//             </div>
//           </div>
//         </section>

//         {/* Dynamic Sections */}
//         <section className={css.content}>
//           <div className={css.container}>
//             {service.sections.map((section, idx) => {
//               if (section.type === "text") {
//                 return (
//                   <div key={idx} className={css.textBlock}>
//                     <h2 className={css.sectionTitle}>{section.title}</h2>
//                     {section.content.split("\n").map((line, i) => (
//                       <p key={i} className={css.textContent}>
//                         {line}
//                       </p>
//                     ))}
//                   </div>
//                 );
//               }

//               if (section.type === "list") {
//                 return (
//                   <div key={idx} className={css.listBlock}>
//                     <h2 className={css.sectionTitle}>{section.title}</h2>
//                     <ul className={css.listContent}>
//                       {section.items.map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 );
//               }

//               if (section.type === "cta") {
//                 return (
//                   <div key={idx} className={css.ctaBlock}>
//                     <h2 className={css.ctaTitle}>{section.title}</h2>
//                     <a href={`tel:${section.phone}`} className={css.ctaButton}>
//                       <FaPhone /> {section.buttonText}: {section.phone}
//                     </a>
//                   </div>
//                 );
//               }

//               return null;
//             })}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }
