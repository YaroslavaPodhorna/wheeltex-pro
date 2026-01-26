// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAppointments,
//   loadMoreAppointments,
//   deleteAppointment,
//   updateAppointment,
//   clearError,
// } from "../../redux/slices/adminSlice";
// import AppointmentTable from "../../components/AdminPage/AppointmentTable.jsx";
// import AppointmentModal from "../../components/AdminPage/AppointmentModal.jsx";
// import StatsCards from "../../components/AdminPage/StatsCards.jsx";
// import FilterBar from "../../components/AdminPage/FilterBar.jsx";
// import css from "../../pages/AdminPage/AdminPage.module.css";

// export default function AdminPage() {
//   const dispatch = useDispatch();
//   const {
//     appointments,
//     loading,
//     loadingMore,
//     actionLoading, // ✅ для delete/update операцій
//     error,
//     pagination,
//   } = useSelector((state) => state.admin);

//   // Стейт для фільтрів і пошуку
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [serviceFilter, setServiceFilter] = useState("all");
//   const [sortField, setSortField] = useState("createdAt");
//   const [sortOrder, setSortOrder] = useState("desc");

//   // Стейт для модального вікна
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Завантажуємо перші дані
//   useEffect(() => {
//     dispatch(fetchAppointments({ page: 1 }));
//   }, [dispatch]);

//   // ✅ Очищення помилки при зміні компонента
//   useEffect(() => {
//     return () => {
//       dispatch(clearError());
//     };
//   }, [dispatch]);

//   // Фільтрація та сортування (тільки для відображення, не для пагінації)
//   const filteredAppointments = React.useMemo(() => {
//     if (!appointments || !Array.isArray(appointments)) return [];

//     let filtered = appointments.filter((appointment) => {
//       const matchesSearch =
//         appointment.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         appointment.phone.includes(searchTerm) ||
//         (appointment.email &&
//           appointment.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
//         appointment.vehicle.model
//           .toLowerCase()
//           .includes(searchTerm.toLowerCase());

//       const matchesStatus =
//         statusFilter === "all" || appointment.status === statusFilter;
//       const matchesService =
//         serviceFilter === "all" || appointment.service === serviceFilter;

//       return matchesSearch && matchesStatus && matchesService;
//     });

//     // Сортування
//     filtered.sort((a, b) => {
//       let aValue = a[sortField];
//       let bValue = b[sortField];

//       if (sortField === "preferredDate" || sortField === "createdAt") {
//         aValue = new Date(aValue);
//         bValue = new Date(bValue);
//       } else if (typeof aValue === "string") {
//         aValue = aValue.toLowerCase();
//         bValue = bValue.toLowerCase();
//       }

//       if (sortOrder === "asc") {
//         return aValue > bValue ? 1 : -1;
//       } else {
//         return aValue < bValue ? 1 : -1;
//       }
//     });

//     return filtered;
//   }, [
//     appointments,
//     searchTerm,
//     statusFilter,
//     serviceFilter,
//     sortField,
//     sortOrder,
//   ]);

//   // Обробники подій
//   const handleView = (appointment) => {
//     setSelectedAppointment(appointment);
//     setIsModalOpen(true);
//   };

//   const handleEdit = (appointment) => {
//     setSelectedAppointment(appointment);
//     setIsModalOpen(true);
//   };

//   // ✅ Оновлений handleDelete з Redux
//   const handleDelete = async (appointmentId) => {
//     if (window.confirm("Are you sure you want to delete this appointment?")) {
//       try {
//         await dispatch(deleteAppointment(appointmentId)).unwrap();
//         // Опціонально: toast.success("Appointment deleted successfully");
//       } catch (error) {
//         console.error("Delete error:", error);
//         // Опціонально: toast.error(`Failed to delete appointment: ${error}`);
//       }
//     }
//   };

//   // ✅ Оновлений handleSave з Redux
//   const handleSave = async (appointmentId, updates) => {
//     try {
//       await dispatch(
//         updateAppointment({ id: appointmentId, updates })
//       ).unwrap();
//       setIsModalOpen(false);
//       setSelectedAppointment(null);
//       // Опціонально: toast.success("Appointment updated successfully");
//     } catch (error) {
//       console.error("Update error:", error);
//       // Опціонально: toast.error(`Failed to update appointment: ${error}`);
//       // Не закриваємо модал при помилці, щоб користувач міг спробувати ще раз
//     }
//   };

//   const handleSort = (field) => {
//     if (sortField === field) {
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     } else {
//       setSortField(field);
//       setSortOrder("asc");
//     }
//   };

//   // ✅ Обробник для Load More
//   const handleLoadMore = () => {
//     dispatch(loadMoreAppointments());
//   };

//   // ✅ Перевірка чи є ще дані для завантаження
//   const hasMoreData = pagination?.hasNextPage;
//   const showLoadMoreButton = !loading && !loadingMore && hasMoreData;

//   // Фільтри
//   const filterProps = {
//     searchTerm,
//     setSearchTerm,
//     statusFilter,
//     setStatusFilter,
//     serviceFilter,
//     setServiceFilter,
//   };

//   return (
//     <div className={css.adminPage}>
//       <div className={css.container}>
//         {/* Header */}
//         <div className={css.header}>
//           <h1 className={css.title}>Appointments Management</h1>
//           <p className={css.subtitle}>
//             Manage and track all customer appointments
//           </p>
//         </div>

//         {/* Stats Cards */}
//         {/* <StatsCards appointments={appointments || []} /> */}

//         {/* Filters */}
//         <FilterBar {...filterProps} />

//         {/* Loading/Error States */}
//         {loading && <div className={css.loading}>Loading appointments...</div>}
//         {error && (
//           <div className={css.error}>
//             Error: {error}
//             <button
//               onClick={() => dispatch(clearError())}
//               className={css.closeError}
//             >
//               ✕
//             </button>
//           </div>
//         )}

//         {/* ✅ Action Loading Indicator */}
//         {actionLoading && (
//           <div className={css.actionLoading}>Processing request...</div>
//         )}

//         {/* Table */}
//         {!loading && !error && (
//           <>
//             <AppointmentTable
//               appointments={filteredAppointments}
//               onView={handleView}
//               onEdit={handleEdit}
//               onDelete={handleDelete}
//               onSort={handleSort}
//               sortField={sortField}
//               sortOrder={sortOrder}
//               isActionLoading={actionLoading} // ✅ передаємо для блокування кнопок
//             />

//             {/* ✅ Load More Section */}
//             <div className={css.loadMoreSection}>
//               {loadingMore && (
//                 <div className={css.loadingMore}>
//                   Loading more appointments...
//                 </div>
//               )}

//               {showLoadMoreButton && (
//                 <button
//                   className={css.loadMoreButton}
//                   onClick={handleLoadMore}
//                   disabled={loadingMore || actionLoading}
//                 >
//                   Load More Appointments
//                 </button>
//               )}

//               {/* Показуємо інформацію про кількість завантажених записів */}
//               {pagination && (
//                 <div className={css.paginationInfo}>
//                   Showing {appointments.length} of {pagination.totalItems}{" "}
//                   appointments
//                   {!hasMoreData && appointments.length > 0 && (
//                     <span className={css.allLoaded}>
//                       {" "}
//                       - All appointments loaded
//                     </span>
//                   )}
//                 </div>
//               )}
//             </div>
//           </>
//         )}

//         {/* Modal */}
//         <AppointmentModal
//           appointment={selectedAppointment}
//           isOpen={isModalOpen}
//           onClose={() => {
//             setIsModalOpen(false);
//             setSelectedAppointment(null);
//             dispatch(clearError()); // ✅ очищаємо помилки при закритті
//           }}
//           onSave={handleSave}
//           isLoading={actionLoading} // ✅ передаємо стан завантаження
//         />
//       </div>
//     </div>
//   );
// }
