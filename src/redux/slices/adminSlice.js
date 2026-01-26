// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../../api/axiosInstance";

// // ✅ Оновлений fetchAppointments з підтримкою load more
// export const fetchAppointments = createAsyncThunk(
//   "adminAppointments/fetchAppointments",
//   async ({ page = 1, loadMore = false } = {}, { rejectWithValue }) => {
//     try {
//       console.log(`🔄 Відправляю запит на /admin/appointments?page=${page}...`);

//       const res = await axiosInstance.get(`/admin/appointments?page=${page}`);
//       console.log("✅ Отримав відповідь:", res.data);

//       const responseData = res.data.data;

//       if (
//         responseData &&
//         responseData.data &&
//         Array.isArray(responseData.data)
//       ) {
//         console.log("✅ Знайдено appointments:", responseData.data.length);
//         return {
//           appointments: responseData.data,
//           pagination: {
//             page: responseData.page,
//             totalPages: responseData.totalPages,
//             totalItems: responseData.totalItems,
//             hasNextPage: responseData.hasNextPage,
//             hasPreviousPage: responseData.hasPreviousPage,
//           },
//           loadMore, // передаємо флаг чи це load more
//         };
//       }

//       if (Array.isArray(responseData)) {
//         return { appointments: responseData, pagination: null, loadMore };
//       }

//       console.warn("⚠️ Неочікувана структура даних:", responseData);
//       return { appointments: [], pagination: null, loadMore };
//     } catch (err) {
//       console.error(
//         "❌ Помилка fetchAppointments:",
//         err.response?.data || err.message
//       );

//       return rejectWithValue(
//         err.response?.data?.message || "Failed to fetch appointments"
//       );
//     }
//   }
// );

// // Додатковий thunk для load more
// export const loadMoreAppointments = createAsyncThunk(
//   "adminAppointments/loadMoreAppointments",
//   async (_, { getState, dispatch }) => {
//     const { admin } = getState();
//     const currentPage = admin.pagination?.page || 1;
//     const nextPage = currentPage + 1;

//     return dispatch(fetchAppointments({ page: nextPage, loadMore: true }));
//   }
// );

// // Реєстрація адміністратора (без змін)
// export const registerAdmin = createAsyncThunk(
//   "adminAppointments/registerAdmin",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post(
//         "/admin/register",
//         credentials,
//         { withCredentials: true }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Registration failed"
//       );
//     }
//   }
// );

// // ✅ Оновлений slice з підтримкою load more
// const adminAppointmentsSlice = createSlice({
//   name: "adminAppointments",
//   initialState: {
//     appointments: [],
//     pagination: null,
//     loading: false,
//     loadingMore: false, // окремий стан для load more
//     error: null,
//     isAuthenticated: false,
//     admin: null,
//   },
//   reducers: {
//     // Додатковий reducer для скидання стану
//     resetAppointments: (state) => {
//       state.appointments = [];
//       state.pagination = null;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // FETCH APPOINTMENTS (перше завантаження)
//       .addCase(fetchAppointments.pending, (state, action) => {
//         const { loadMore } = action.meta.arg || {};
//         if (loadMore) {
//           state.loadingMore = true;
//         } else {
//           state.loading = true;
//         }
//         state.error = null;
//       })
//       .addCase(fetchAppointments.fulfilled, (state, action) => {
//         console.log("✅ fetchAppointments.fulfilled, payload:", action.payload);
//         const { loadMore } = action.payload;

//         state.loading = false;
//         state.loadingMore = false;

//         if (loadMore) {
//           // Додаємо нові дані до існуючих
//           state.appointments = [
//             ...state.appointments,
//             ...action.payload.appointments,
//           ];
//         } else {
//           // Замінюємо дані (перше завантаження)
//           state.appointments = action.payload.appointments;
//         }

//         state.pagination = action.payload.pagination;
//       })
//       .addCase(fetchAppointments.rejected, (state, action) => {
//         console.error("❌ fetchAppointments.rejected, error:", action.payload);
//         state.loading = false;
//         state.loadingMore = false;
//         state.error = action.payload;
//       })

//       // LOAD MORE APPOINTMENTS
//       .addCase(loadMoreAppointments.pending, (state) => {
//         state.loadingMore = true;
//         state.error = null;
//       })
//       .addCase(loadMoreAppointments.fulfilled, (state, action) => {
//         // Обробляється через fetchAppointments.fulfilled
//         state.loadingMore = false;
//       })
//       .addCase(loadMoreAppointments.rejected, (state, action) => {
//         state.loadingMore = false;
//         state.error = action.error.message;
//       })

//       // REGISTER ADMIN (без змін)
//       .addCase(registerAdmin.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(registerAdmin.fulfilled, (state, action) => {
//         state.loading = false;
//         state.isAuthenticated = true;
//         state.admin = action.payload.admin;
//       })
//       .addCase(registerAdmin.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { resetAppointments } = adminAppointmentsSlice.actions;
// export default adminAppointmentsSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// ✅ Оновлений fetchAppointments з підтримкою load more
export const fetchAppointments = createAsyncThunk(
  "adminAppointments/fetchAppointments",
  async ({ page = 1, loadMore = false } = {}, { rejectWithValue }) => {
    try {
      console.log(`🔄 Відправляю запит на /admin/appointments?page=${page}...`);

      const res = await axiosInstance.get(`/admin/appointments?page=${page}`);
      console.log("✅ Отримав відповідь:", res.data);

      const responseData = res.data.data;

      if (
        responseData &&
        responseData.data &&
        Array.isArray(responseData.data)
      ) {
        console.log("✅ Знайдено appointments:", responseData.data.length);
        return {
          appointments: responseData.data,
          pagination: {
            page: responseData.page,
            totalPages: responseData.totalPages,
            totalItems: responseData.totalItems,
            hasNextPage: responseData.hasNextPage,
            hasPreviousPage: responseData.hasPreviousPage,
          },
          loadMore, // передаємо флаг чи це load more
        };
      }

      if (Array.isArray(responseData)) {
        return { appointments: responseData, pagination: null, loadMore };
      }

      console.warn("⚠️ Неочікувана структура даних:", responseData);
      return { appointments: [], pagination: null, loadMore };
    } catch (err) {
      console.error(
        "❌ Помилка fetchAppointments:",
        err.response?.data || err.message
      );

      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch appointments"
      );
    }
  }
);

// Додатковий thunk для load more
export const loadMoreAppointments = createAsyncThunk(
  "adminAppointments/loadMoreAppointments",
  async (_, { getState, dispatch }) => {
    const { admin } = getState();
    const currentPage = admin.pagination?.page || 1;
    const nextPage = currentPage + 1;

    return dispatch(fetchAppointments({ page: nextPage, loadMore: true }));
  }
);

// ✅ НОВИЙ: Delete appointment
export const deleteAppointment = createAsyncThunk(
  "adminAppointments/deleteAppointment",
  async (appointmentId, { rejectWithValue }) => {
    try {
      console.log(`🗑️ Видаляю appointment з ID: ${appointmentId}`);

      await axiosInstance.delete(`/admin/appointments/${appointmentId}`);

      console.log("✅ Appointment успішно видалений");
      return appointmentId; // повертаємо ID для видалення зі стейту
    } catch (err) {
      console.error("❌ Помилка видалення:", err.response?.data || err.message);

      return rejectWithValue(
        err.response?.data?.message || "Failed to delete appointment"
      );
    }
  }
);

// ✅ НОВИЙ: Update appointment
export const updateAppointment = createAsyncThunk(
  "adminAppointments/updateAppointment",
  async ({ id, updates }, { rejectWithValue }) => {
    try {
      console.log(`🔄 Оновлюю appointment з ID: ${id}`, updates);

      const res = await axiosInstance.put(`/admin/appointments/${id}`, updates);

      console.log("✅ Appointment успішно оновлений:", res.data);
      return res.data.data || res.data; // повертаємо оновлений appointment
    } catch (err) {
      console.error("❌ Помилка оновлення:", err.response?.data || err.message);

      return rejectWithValue(
        err.response?.data?.message || "Failed to update appointment"
      );
    }
  }
);

// Реєстрація адміністратора (без змін)
export const registerAdmin = createAsyncThunk(
  "adminAppointments/registerAdmin",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/admin/register",
        credentials,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

// ✅ Оновлений slice з підтримкою CRUD операцій
const adminAppointmentsSlice = createSlice({
  name: "adminAppointments",
  initialState: {
    appointments: [],
    pagination: null,
    loading: false,
    loadingMore: false, // окремий стан для load more
    actionLoading: false, // для delete/update операцій
    error: null,
    isAuthenticated: false,
    admin: null,
  },
  reducers: {
    // Додатковий reducer для скидання стану
    resetAppointments: (state) => {
      state.appointments = [];
      state.pagination = null;
      state.error = null;
    },
    // Очищення помилок
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // FETCH APPOINTMENTS (перше завантаження)
      .addCase(fetchAppointments.pending, (state, action) => {
        const { loadMore } = action.meta.arg || {};
        if (loadMore) {
          state.loadingMore = true;
        } else {
          state.loading = true;
        }
        state.error = null;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        console.log("✅ fetchAppointments.fulfilled, payload:", action.payload);
        const { loadMore } = action.payload;

        state.loading = false;
        state.loadingMore = false;

        if (loadMore) {
          // Додаємо нові дані до існуючих
          state.appointments = [
            ...state.appointments,
            ...action.payload.appointments,
          ];
        } else {
          // Замінюємо дані (перше завантаження)
          state.appointments = action.payload.appointments;
        }

        state.pagination = action.payload.pagination;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        console.error("❌ fetchAppointments.rejected, error:", action.payload);
        state.loading = false;
        state.loadingMore = false;
        state.error = action.payload;
      })

      // LOAD MORE APPOINTMENTS
      .addCase(loadMoreAppointments.pending, (state) => {
        state.loadingMore = true;
        state.error = null;
      })
      .addCase(loadMoreAppointments.fulfilled, (state, action) => {
        // Обробляється через fetchAppointments.fulfilled
        state.loadingMore = false;
      })
      .addCase(loadMoreAppointments.rejected, (state, action) => {
        state.loadingMore = false;
        state.error = action.error.message;
      })

      // ✅ DELETE APPOINTMENT
      .addCase(deleteAppointment.pending, (state) => {
        state.actionLoading = true;
        state.error = null;
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.actionLoading = false;
        // Видаляємо appointment зі стейту
        state.appointments = state.appointments.filter(
          (appointment) => appointment._id !== action.payload
        );
        // Оновлюємо лічильник в пагінації
        if (state.pagination) {
          state.pagination.totalItems = Math.max(
            0,
            state.pagination.totalItems - 1
          );
        }
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.actionLoading = false;
        state.error = action.payload;
      })

      // ✅ UPDATE APPOINTMENT
      .addCase(updateAppointment.pending, (state) => {
        state.actionLoading = true;
        state.error = null;
      })
      .addCase(updateAppointment.fulfilled, (state, action) => {
        state.actionLoading = false;
        // Знаходимо та оновлюємо appointment в масиві
        const index = state.appointments.findIndex(
          (appointment) => appointment._id === action.payload._id
        );
        if (index !== -1) {
          state.appointments[index] = action.payload;
        }
      })
      .addCase(updateAppointment.rejected, (state, action) => {
        state.actionLoading = false;
        state.error = action.payload;
      })

      // REGISTER ADMIN (без змін)
      .addCase(registerAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.admin = action.payload.admin;
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetAppointments, clearError } = adminAppointmentsSlice.actions;
export default adminAppointmentsSlice.reducer;
