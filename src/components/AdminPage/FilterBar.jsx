import React from "react";
import css from "../../components/AdminPage/FilterBar.module.css";

export default function FilterBar({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  serviceFilter,
  setServiceFilter,
}) {
  return (
    <div className={css.filterBar}>
      <div className={css.filterGrid}>
        {/* Search */}
        <div className={css.searchContainer}>
          <div className={css.searchIcon}>🔍</div>
          <input
            type="text"
            placeholder="Search appointments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={css.searchInput}
          />
        </div>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className={css.select}
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
          <option value="canceled">Canceled</option>
        </select>

        {/* Service Filter */}
        <select
          value={serviceFilter}
          onChange={(e) => setServiceFilter(e.target.value)}
          className={css.select}
        >
          <option value="all">All Services</option>
          <option value="Wheel Alignment">Wheel Alignment</option>
          <option value="Tire Change">Tire Change</option>
          <option value="Oil Change">Oil Change</option>
          <option value="Diagnostics">Diagnostics</option>
          <option value="Other">Other</option>
        </select>

        {/* New Appointment Button */}
        <button className={css.newButton}>
          <span className={css.buttonIcon}>+</span>
          <span className={css.buttonText}>New Appointment</span>
        </button>
      </div>
    </div>
  );
}
