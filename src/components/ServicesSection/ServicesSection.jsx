import React from "react";

import css from "./ServicesSection.module.css";
import { NavLink } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Passenger Cars",
    subtitle: "Factory Grade Wheel Alignment for Everyday Safety & Reliability",
    text: "Keep your daily drive safe, smooth and efficient with our expert wheel alignment services for passenger cars. Proper alignment extends tire life, improves fuel economy, and enhances handling—whether it’s a compact sedan or a family SUV. Our experienced technicians use cutting-edge technology to diagnose and correct any issues, ensuring your vehicle performs at its best on city streets or highways.",
    image: "/passenger.jpg",
  },
  {
    id: 2,
    title: "High Performance and Sport Cars",
    subtitle:
      "Wheel Alignment Especially Tailored for Your High-Performance Thrills",
    text: "Exotic and sports cars like Ferraris, Lamborghinis, Porsches, McLarens deserve nothing less than perfection. Our specialized alignment services maintain razor-sharp steering, optimal grip, and peak performance. With experience handling luxury supercars, we fine-tune your ride to factory specs or custom preferences, protecting your investment and elevating your driving experience.",
    image: "/exotic.jpg",
  },
  {
    id: 3,
    title: "Heavy Duty Vehicles, Trucks, and Semis",
    subtitle: "Robust Alignment for Heavy Haulers",
    text: "For truck's, semi's, and heavy-duty vehicle's, impeccable wheel alignment is the key to safety, load stability, reduced downtime and money savings. We offer comprehensive services tailored to commercial fleets and big rigs, using heavy-duty dedicated equipment to correct caster, camber, and toe for maximum efficiency. Minimize tire wear and fuel costs while keeping your operations rolling strong.",
    image: "/Truck.jpg",
  },
  {
    id: 4,
    title: "Campers, Motor Homes, and Sprinter Vans",
    subtitle: "Adventure-Ready Alignment for RVs and Vans",
    text: "Embark on your next journey with confidence—our alignment experts handle campers, motor homes, and Sprinter vans with precision. We address unique challenges like extended wheelbases and heavy loads, ensuring straight tracking, better maneuverability, and longer tire life. Whether touring cross-country or weekend camping, we get your home-on-wheels aligned for the road ahead.",
    image: "/flat.jpg",
  },
  {
    id: 5,
    title: "Off-Road and Modified Vehicles",
    subtitle: "Custom Alignment for Rugged Explorers",
    text: "Off-road enthusiasts and customized vehicle owners know that lifts, big tires, and custom suspensions demand specialized care. Our services optimize alignment for Jeeps, trucks, and 4x4s, balancing on-road comfort with off-road capability. Conquer trails without compromising safety or performance—let us dial in your setup for ultimate durability and control.",
    image: "/offRoad.jpg",
  },
  {
    id: 6,
    subtitle: "Other Services",
    type: "other",
  },
];

export default function ServicesSection() {
  return (
    <section className={css.services}>
      <div className={css.container}>
        <h2 className={css.title}>HD Alignment</h2>

        <ul className={css.list}>
          {services.map((service) => (
            <li key={service.id} className={css.item}>
              {service.type !== "other" ? (
                <div className={css.overlayWrapper}>
                  <img
                    src={service.image}
                    alt={service.subtitle}
                    className={css.image}
                  />

                  <div className={css.overlayText}>
                    <h3 className={css.overlaySubtitle}>{service.subtitle}</h3>
                    <p className={css.overlayDesc}>{service.text}</p>
                  </div>
                </div>
              ) : (
                /* ===== 6-я КАРТОЧКА ===== */

                <div className={css.otherWrapper}>
                  <div className={css.otherOverlay}>
                    <ul className={css.otherList}>
                      <li style={{ animationDelay: "0ms" }}>
                        <NavLink
                          to="/services/suspension"
                          className={css.otherLink}
                        >
                          <span className={css.serviceName}>Suspension</span>
                          <span className={css.cta}>
                            View details <span className={css.arrow}>→</span>
                          </span>
                        </NavLink>
                      </li>

                      <li style={{ animationDelay: "80ms" }}>
                        <NavLink
                          to="/services/brakes"
                          className={css.otherLink}
                        >
                          <span className={css.serviceName}>Brakes</span>
                          <span className={css.cta}>
                            View details <span className={css.arrow}>→</span>
                          </span>
                        </NavLink>
                      </li>

                      <li style={{ animationDelay: "160ms" }}>
                        <div className={css.otherLinkDisabled}>
                          <span className={css.serviceName}>Tires</span>
                          <span className={css.comingSoon}>Coming soon</span>
                        </div>
                        {/* <NavLink to="/services/tires" className={css.otherLink}>
                          <span className={css.serviceName}>Tires</span>
                          <span className={css.cta}>
                            View details <span className={css.arrow}>→</span>
                          </span>
                        </NavLink> */}
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              <div className={css.cardBottom}>
                <h4 className={css.cardTitle}>{service.title}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
