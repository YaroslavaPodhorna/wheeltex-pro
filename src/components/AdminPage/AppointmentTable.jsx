import React from "react";
import AppointmentRow from "../../components/AdminPage/AppointmentRow.jsx";
import css from "../../components/AdminPage/AppointmentTable.module.css";

const serviceIcons = {
  "Wheel Alignment": "⚙️",
  "Tire Change": "🛞",
  "Oil Change": "🛢️",
  Diagnostics: "🔧",
  Other: "🔨",
};

export default function AppointmentTable({
  appointments,
  onView,
  onEdit,
  onDelete,
  onSort,
  sortField,
  sortOrder,
  // Load More функціонал
  onLoadMore,
  hasMoreData,
  loadingMore,
  totalItems,
  showLoadMore = true, // опційний пропс для контролю показу кнопки
}) {
  const getSortIcon = (field) => {
    if (sortField !== field) return <span className={css.sortIcon}>⏸</span>;
    return sortOrder === "asc" ? (
      <span className={css.sortIcon}>↑</span>
    ) : (
      <span className={css.sortIcon}>↓</span>
    );
  };

  return (
    <div className={css.tableContainer}>
      <div className={css.tableWrapper}>
        <table className={css.table}>
          <thead className={css.thead}>
            <tr>
              <th className={css.th} onClick={() => onSort("fullName")}>
                <div className={css.thContent}>
                  Customer
                  {getSortIcon("fullName")}
                </div>
              </th>
              <th className={css.th} onClick={() => onSort("vehicle")}>
                <div className={css.thContent}>
                  Vehicle
                  {getSortIcon("vehicle")}
                </div>
              </th>
              <th className={css.th} onClick={() => onSort("service")}>
                <div className={css.thContent}>
                  Service
                  {getSortIcon("service")}
                </div>
              </th>
              <th className={css.th} onClick={() => onSort("preferredDate")}>
                <div className={css.thContent}>
                  Date & Time
                  {getSortIcon("preferredDate")}
                </div>
              </th>
              <th className={css.th} onClick={() => onSort("status")}>
                <div className={css.thContent}>
                  Status
                  {getSortIcon("status")}
                </div>
              </th>
              <th className={`${css.th} ${css.actionsHeader}`}>Actions</th>
            </tr>
          </thead>
          <tbody className={css.tbody}>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <AppointmentRow
                  key={appointment._id}
                  appointment={appointment}
                  onView={onView}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  serviceIcons={serviceIcons}
                />
              ))
            ) : (
              <tr>
                <td colSpan="6" className={css.emptyState}>
                  <div className={css.emptyContent}>
                    <div className={css.emptyIcon}>📋</div>
                    <h3 className={css.emptyTitle}>No appointments found</h3>
                    <p className={css.emptyText}>
                      Try adjusting your search or filters to find what you're
                      looking for.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Load More Section */}
      {showLoadMore && appointments.length > 0 && (
        <div className={css.loadMoreSection}>
          {/* Індикатор завантаження додаткових даних */}
          {loadingMore && (
            <div className={css.loadingMore}>
              <span className={css.spinner}></span>
              Loading more appointments...
            </div>
          )}

          {/* Кнопка Load More */}
          {hasMoreData && !loadingMore && (
            <button
              className={css.loadMoreButton}
              onClick={onLoadMore}
              disabled={loadingMore}
            >
              Load More Appointments
            </button>
          )}

          {/* Інформація про завантажені дані */}
          <div className={css.paginationInfo}>
            Showing {appointments.length}
            {totalItems && (
              <>
                {" of "}
                <strong>{totalItems}</strong>
              </>
            )}
            appointments
            {/* Повідомлення коли всі дані завантажені */}
            {!hasMoreData && appointments.length > 0 && (
              <span className={css.allLoaded}> - All appointments loaded</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
