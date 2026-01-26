// import React, { useState, useEffect } from "react";
// import css from "../../components/AdminPage/AppointmentModal.module.css";

// const serviceIcons = {
//   "Wheel Alignment": "⚙️",
//   "Tire Change": "🛞",
//   "Oil Change": "🛢️",
//   Diagnostics: "🔧",
//   Other: "🔨",
// };

// export default function AppointmentModal({
//   appointment,
//   isOpen,
//   onClose,
//   onSave,
// }) {
//   const [status, setStatus] = useState("pending");
//   const [notes, setNotes] = useState("");

//   useEffect(() => {
//     if (appointment) {
//       setStatus(appointment.status);
//       setNotes("");
//     }
//   }, [appointment]);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   if (!isOpen || !appointment) return null;

//   const handleSave = () => {
//     onSave(appointment._id, { status, notes });
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString("uk-UA", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   const formatDateTime = (dateString) => {
//     return new Date(dateString).toLocaleDateString("uk-UA", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   return (
//     <div className={css.overlay} onClick={onClose}>
//       <div className={css.modal} onClick={(e) => e.stopPropagation()}>
//         {/* Header */}
//         <div className={css.header}>
//           <h2 className={css.title}>Appointment Details</h2>
//           <button onClick={onClose} className={css.closeBtn}>
//             ✕
//           </button>
//         </div>

//         {/* Content */}
//         <div className={css.content}>
//           <div className={css.grid}>
//             {/* Customer Info */}
//             <div className={css.section}>
//               <h3 className={css.sectionTitle}>👤 Customer Information</h3>
//               <div className={css.infoCard}>
//                 <div className={css.infoRow}>
//                   <span className={css.label}>Name:</span>
//                   <span className={css.value}>{appointment.fullName}</span>
//                 </div>
//                 <div className={css.infoRow}>
//                   <span className={css.label}>📞 Phone:</span>
//                   <span className={css.value}>{appointment.phone}</span>
//                 </div>
//                 <div className={css.infoRow}>
//                   <span className={css.label}>✉️ Email:</span>
//                   <span className={css.value}>
//                     {appointment.email || "Not provided"}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Vehicle Info */}
//             <div className={css.section}>
//               <h3 className={css.sectionTitle}>🚗 Vehicle Information</h3>
//               <div className={css.infoCard}>
//                 <div className={css.infoRow}>
//                   <span className={css.label}>Model:</span>
//                   <span className={css.value}>{appointment.vehicle.model}</span>
//                 </div>
//                 <div className={css.infoRow}>
//                   <span className={css.label}>Year:</span>
//                   <span className={css.value}>{appointment.vehicle.year}</span>
//                 </div>
//                 <div className={css.infoRow}>
//                   <span className={css.label}>Service:</span>
//                   <span className={css.value}>
//                     {serviceIcons[appointment.service]} {appointment.service}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Appointment Details */}
//             <div className={css.section}>
//               <h3 className={css.sectionTitle}>📅 Appointment Details</h3>
//               <div className={css.infoCard}>
//                 <div className={css.infoRow}>
//                   <span className={css.label}>📅 Date:</span>
//                   <span className={css.value}>
//                     {formatDate(appointment.preferredDate)}
//                   </span>
//                 </div>
//                 <div className={css.infoRow}>
//                   <span className={css.label}>🕒 Time:</span>
//                   <span className={css.value}>{appointment.preferredTime}</span>
//                 </div>
//                 <div className={css.infoRow}>
//                   <span className={css.label}>Created:</span>
//                   <span className={css.value}>
//                     {formatDateTime(appointment.createdAt)}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Status Management */}
//             <div className={css.section}>
//               <h3 className={css.sectionTitle}>⚙️ Status Management</h3>
//               <div className={css.infoCard}>
//                 <div className={css.formGroup}>
//                   <label className={css.inputLabel}>Current Status</label>
//                   <select
//                     value={status}
//                     onChange={(e) => setStatus(e.target.value)}
//                     className={css.select}
//                   >
//                     <option value="pending">Pending</option>
//                     <option value="confirmed">Confirmed</option>
//                     <option value="completed">Completed</option>
//                     <option value="canceled">Canceled</option>
//                   </select>
//                 </div>
//                 <div className={css.formGroup}>
//                   <label className={css.inputLabel}>Notes (Optional)</label>
//                   <textarea
//                     value={notes}
//                     onChange={(e) => setNotes(e.target.value)}
//                     placeholder="Add any notes about this appointment..."
//                     className={css.textarea}
//                     rows="3"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Customer Message */}
//           {appointment.message && (
//             <div className={css.messageSection}>
//               <h3 className={css.sectionTitle}>💬 Customer Message</h3>
//               <div className={css.messageCard}>
//                 <p className={css.messageText}>{appointment.message}</p>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Footer */}
//         <div className={css.footer}>
//           <button onClick={onClose} className={`${css.btn} ${css.cancelBtn}`}>
//             Cancel
//           </button>
//           <button onClick={handleSave} className={`${css.btn} ${css.saveBtn}`}>
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect } from "react";
import css from "../../components/AdminPage/AppointmentModal.module.css";

const serviceIcons = {
  "Wheel Alignment": "⚙️",
  "Tire Change": "🛞",
  "Oil Change": "🛢️",
  Diagnostics: "🔧",
  Other: "🔨",
};

export default function AppointmentModal({ appointment, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !appointment) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("uk-UA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleDateString("uk-UA", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={css.header}>
          <h2 className={css.title}>Appointment Details</h2>
          <button onClick={onClose} className={css.closeBtn}>
            ✕
          </button>
        </div>

        {/* Content */}
        <div className={css.content}>
          <div className={css.grid}>
            {/* Customer Info */}
            <div className={css.section}>
              <h3 className={css.sectionTitle}>👤 Customer Information</h3>
              <div className={css.infoCard}>
                <div className={css.infoRow}>
                  <span className={css.label}>Name:</span>
                  <span className={css.value}>{appointment.fullName}</span>
                </div>
                <div className={css.infoRow}>
                  <span className={css.label}>📞 Phone:</span>
                  <span className={css.value}>{appointment.phone}</span>
                </div>
                <div className={css.infoRow}>
                  <span className={css.label}>✉️ Email:</span>
                  <span className={css.value}>
                    {appointment.email || "Not provided"}
                  </span>
                </div>
              </div>
            </div>

            {/* Vehicle Info */}
            <div className={css.section}>
              <h3 className={css.sectionTitle}>🚗 Vehicle Information</h3>
              <div className={css.infoCard}>
                <div className={css.infoRow}>
                  <span className={css.label}>Model:</span>
                  <span className={css.value}>{appointment.vehicle.model}</span>
                </div>
                <div className={css.infoRow}>
                  <span className={css.label}>Year:</span>
                  <span className={css.value}>{appointment.vehicle.year}</span>
                </div>
                <div className={css.infoRow}>
                  <span className={css.label}>Service:</span>
                  <span className={css.value}>
                    {serviceIcons[appointment.service]} {appointment.service}
                  </span>
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div className={css.section}>
              <h3 className={css.sectionTitle}>📅 Appointment Details</h3>
              <div className={css.infoCard}>
                <div className={css.infoRow}>
                  <span className={css.label}>📅 Date:</span>
                  <span className={css.value}>
                    {formatDate(appointment.preferredDate)}
                  </span>
                </div>
                <div className={css.infoRow}>
                  <span className={css.label}>🕒 Time:</span>
                  <span className={css.value}>{appointment.preferredTime}</span>
                </div>
                <div className={css.infoRow}>
                  <span className={css.label}>Created:</span>
                  <span className={css.value}>
                    {formatDateTime(appointment.createdAt)}
                  </span>
                </div>
                {/* <div className={css.infoRow}>
                  <span className={css.label}>Status:</span>
                  <span className={css.value}>{appointment.status}</span>
                </div> */}
              </div>
            </div>
          </div>

          {/* Customer Message */}
          {appointment.message && (
            <div className={css.messageSection}>
              <h3 className={css.sectionTitle}>💬 Customer Message</h3>
              <div className={css.messageCard}>
                <p className={css.messageText}>{appointment.message}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={css.footer}>
          <button onClick={onClose} className={`${css.btn} ${css.cancelBtn}`}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
