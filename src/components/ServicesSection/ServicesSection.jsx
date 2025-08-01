// import React from "react";
// import { motion } from "framer-motion";
// import css from "../ServicesSection/ServicesSection.module.css";

// import {
//   FaTools,
//   FaTruckPickup,
//   FaBalanceScale,
//   FaOilCan,
//   FaCarSide,
// } from "react-icons/fa";

// const services = [
//   {
//     title: "Hunter 3D Alignment",
//     description:
//       "Ultimate precision with our advanced Hunter 3D alignment system for all vehicle types.",
//     image: "/public/hunter.jpg", // фото
//     highlight: true,
//   },
//   {
//     title: "Passenger Car Alignment",
//     description:
//       "Ensure smooth and safe driving with our precise passenger car alignment.",
//     icon: <FaTools />,
//   },
//   {
//     title: "Truck & SUV Alignment",
//     description:
//       "Professional alignment for trucks, SUVs, and heavy-duty vehicles.",
//     icon: <FaTruckPickup />,
//   },
//   {
//     title: "Tire Balancing & Rotation",
//     description:
//       "Extend tire life and improve handling with our balancing and rotation services.",
//     icon: <FaBalanceScale />,
//   },
//   {
//     title: "Oil Change Service",
//     description:
//       "Keep your engine healthy with our quick and reliable oil change.",
//     icon: <FaOilCan />,
//   },
//   {
//     title: "Tire Mounting",
//     description: "Fast and professional tire mounting for any type of vehicle.",
//     icon: <FaCarSide />,
//   },
// ];

// export default function ServicesSection({ preview = false }) {
//   const displayedServices = preview ? services.slice(0, 3) : services;

//   return (
//     <section className={css.services} id="services">
//       <div className={css.container}>
//         <h2 className={css.title}>Our Services</h2>
//         <p className={css.subtitle}>
//           Professional wheel alignment, tire and oil services using cutting-edge
//           Hunter 3D technology.
//         </p>

//         <div className={css.cards}>
//           {displayedServices.map((service, index) => (
//             <motion.div
//               key={index}
//               className={`${css.card} ${
//                 service.highlight ? css.highlight : ""
//               }`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               viewport={{ once: true }}
//             >
//               {service.image ? (
//                 <div
//                   className={css.cardImage}
//                   style={{ backgroundImage: `url(${service.image})` }}
//                 />
//               ) : (
//                 <div className={css.icon}>{service.icon}</div>
//               )}

//               <h3 className={css.cardTitle}>{service.title}</h3>
//               <p className={css.cardDesc}>{service.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import css from "../../components/ServicesSection/ServicesSection.module.css";

// import hunterImg from "../../assets/hunter.jpg"; // правильний імпорт картинки
import {
  FaTools,
  FaTruckPickup,
  FaBalanceScale,
  FaOilCan,
  FaCarSide,
} from "react-icons/fa";

const services = [
  {
    title: "Hunter 3D Alignment",
    description:
      "Ultimate precision with our advanced Hunter 3D alignment system for all vehicle types.",
    image: "../../../public/hunter.jpg", // правильний шлях до картинки
    highlight: true,
  },
  {
    title: "Passenger Car Alignment",
    description:
      "Ensure smooth and safe driving with our precise passenger car alignment.",
    icon: <FaTools />,
  },
  {
    title: "Truck & SUV Alignment",
    description:
      "Professional alignment for trucks, SUVs, and heavy-duty vehicles.",
    icon: <FaTruckPickup />,
  },
  {
    title: "Tire Balancing & Rotation",
    description:
      "Extend tire life and improve handling with our balancing and rotation services.",
    icon: <FaBalanceScale />,
  },
  {
    title: "Oil Change Service",
    description:
      "Keep your engine healthy with our quick and reliable oil change.",
    icon: <FaOilCan />,
  },
  {
    title: "Tire Mounting",
    description: "Fast and professional tire mounting for any type of vehicle.",
    icon: <FaCarSide />,
  },
];

export default function ServicesSection({ preview = false }) {
  const displayedServices = preview ? services.slice(0, 3) : services;

  return (
    <section className={css.services} id="services">
      <div className={css.container}>
        <h2 className={css.title}>Our Services</h2>
        <p className={css.subtitle}>
          Professional wheel alignment, tire and oil services using cutting-edge
          Hunter 3D technology.
        </p>

        <div className={css.cards}>
          {displayedServices.map((service, index) => (
            <motion.div
              key={index}
              className={`${css.card} ${
                service.highlight ? css.highlight : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className={css.cardImage}
                />
              ) : (
                <div className={css.icon}>{service.icon}</div>
              )}
              <h3 className={css.cardTitle}>{service.title}</h3>
              <p className={css.cardDesc}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
