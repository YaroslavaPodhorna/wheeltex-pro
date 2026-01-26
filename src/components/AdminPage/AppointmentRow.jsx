import React from "react";
import css from "../../components/AdminPage/AppointmentRow.module.css";

const statusColors = {
  pending: "pending",
  confirmed: "confirmed",
  completed: "completed",
  canceled: "canceled",
};

export default function AppointmentRow({
  appointment,
  onView,
  onEdit,
  onDelete,
  serviceIcons,
}) {
  const getStatusBadge = (status) => (
    <span className={`${css.statusBadge} ${css[statusColors[status]]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("uk-UA", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <tr className={css.row}>
      {/* Customer */}
      <td className={css.cell}>
        <div className={css.customerInfo}>
          <div className={css.customerName}>{appointment.fullName}</div>
          <div className={css.contactInfo}>
            <div className={css.phone}>📞 {appointment.phone}</div>
            {appointment.email && (
              <div className={css.email}>✉️ {appointment.email}</div>
            )}
          </div>
        </div>
      </td>

      {/* Vehicle */}
      <td className={css.cell}>
        <div className={css.vehicleInfo}>
          <div className={css.vehicleModel}>{appointment.vehicle.model}</div>
          <div className={css.vehicleYear}>{appointment.vehicle.year}</div>
        </div>
      </td>

      {/* Service */}
      <td className={css.cell}>
        <div className={css.serviceInfo}>
          <span className={css.serviceIcon}>
            {serviceIcons[appointment.service]}
          </span>
          <span className={css.serviceName}>{appointment.service}</span>
        </div>
      </td>

      {/* Date & Time */}
      <td className={css.cell}>
        <div className={css.appointmentTime}>
          <div className={css.appointmentDate}>
            📅 {formatDate(appointment.preferredDate)}
          </div>
          <div className={css.appointmentTimeSlot}>
            🕒 {appointment.preferredTime}
          </div>
        </div>
      </td>

      {/* Status */}
      <td className={css.cell}>{getStatusBadge(appointment.status)}</td>

      {/* Actions */}
      <td className={css.cell}>
        <div className={css.actions}>
          <button
            onClick={() => onView(appointment)}
            className={`${css.actionBtn} ${css.viewBtn}`}
            title="View Details"
          >
            👁️
          </button>
          <button
            onClick={() => onEdit(appointment)}
            className={`${css.actionBtn} ${css.editBtn}`}
            title="Edit"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(appointment._id)}
            className={`${css.actionBtn} ${css.deleteBtn}`}
            title="Delete"
          >
            🗑️
          </button>
        </div>
      </td>
    </tr>
  );
}
