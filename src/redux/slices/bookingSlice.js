// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const BASE_URL = "http://localhost:3000"; // тепер бекенд слухає тут

// export const createBooking = createAsyncThunk(
//   "booking/createBooking",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${BASE_URL}/appointments`, formData);
//       return response.data.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Booking failed");
//     }
//   }
// );

// const bookingSlice = createSlice({
//   name: "booking",
//   initialState: {
//     loading: false,
//     success: false,
//     error: null,
//   },
//   reducers: {
//     resetBookingState: (state) => {
//       state.loading = false;
//       state.success = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createBooking.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(createBooking.fulfilled, (state) => {
//         state.loading = false;
//         state.success = true;
//       })
//       .addCase(createBooking.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { resetBookingState } = bookingSlice.actions;
// export default bookingSlice.reducer;
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import axiosInstance from "../../api/axiosInstance";

// // const BASE_URL = "http://localhost:3000"; // ✅ Прибрав /api

// export const createBooking = createAsyncThunk(
//   "booking/createBooking",
//   async (formData, { rejectWithValue }) => {
//     try {
//       console.log("Sending booking data:", formData); // Для дебагу

//       const response = await axiosInstance.post("/appointments", formData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       console.log("Booking response:", response.data); // Для дебагу
//       return response.data.data;
//     } catch (error) {
//       console.error("Booking error:", error.response?.data || error.message); // Для дебагу

//       // ✅ Покращена обробка помилок
//       if (error.response?.data?.errors) {
//         // Якщо є деталі валідації
//         const errorMessages = error.response.data.errors
//           .map((err) => `${err.field}: ${err.message}`)
//           .join(", ");
//         return rejectWithValue(errorMessages);
//       }

//       return rejectWithValue(
//         error.response?.data?.message || error.message || "Booking failed"
//       );
//     }
//   }
// );

// // ✅ Додав функцію для отримання записів (опціонально)
// export const fetchBookings = createAsyncThunk(
//   "booking/fetchBookings",
//   async (params = {}, { rejectWithValue }) => {
//     try {
//       const queryParams = new URLSearchParams(params).toString();
//       const response = await axiosInstance.get("/appointments?${queryParams}");
//       return response.data.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Failed to fetch bookings"
//       );
//     }
//   }
// );

// const bookingSlice = createSlice({
//   name: "booking",
//   initialState: {
//     loading: false,
//     success: false,
//     error: null,
//     bookings: [], // ✅ Додав для зберігання списку записів
//     lastCreatedBooking: null, // ✅ Для зберігання останнього створеного запису
//   },
//   reducers: {
//     resetBookingState: (state) => {
//       state.loading = false;
//       state.success = false;
//       state.error = null;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//     clearSuccess: (state) => {
//       state.success = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // ✅ Create booking
//       .addCase(createBooking.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(createBooking.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.lastCreatedBooking = action.payload;
//         // Додати новий запис до списку, якщо він існує
//         if (state.bookings.length > 0) {
//           state.bookings.unshift(action.payload);
//         }
//       })
//       .addCase(createBooking.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.success = false;
//       })
//       // ✅ Fetch bookings (опціонально)
//       .addCase(fetchBookings.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchBookings.fulfilled, (state, action) => {
//         state.loading = false;
//         state.bookings = action.payload.data || [];
//       })
//       .addCase(fetchBookings.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { resetBookingState, clearError, clearSuccess } =
//   bookingSlice.actions;
// export default bookingSlice.reducer;
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../../api/axiosInstance";

// export const createBooking = createAsyncThunk(
//   "booking/createBooking",
//   async (formData, { rejectWithValue }) => {
//     try {
//       console.log("Sending booking data:", formData);

//       const response = await axiosInstance.post("/appointments", formData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       console.log("Booking response:", response.data);
//       return response.data.data;
//     } catch (error) {
//       console.error("Booking error:", error.response?.data || error.message);

//       // ✅ Покращена обробка помилок
//       if (error.response?.data?.errors) {
//         const errorMessages = error.response.data.errors
//           .map((err) => `${err.field}: ${err.message}`)
//           .join(", ");
//         return rejectWithValue(errorMessages);
//       }

//       return rejectWithValue(
//         error.response?.data?.message || error.message || "Booking failed"
//       );
//     }
//   }
// );

// // ✅ ВИПРАВЛЕНИЙ fetchBookings - для адміна
// export const fetchBookings = createAsyncThunk(
//   "booking/fetchBookings",
//   async (params = {}, { rejectWithValue }) => {
//     try {
//       const queryParams = new URLSearchParams(params).toString();
//       // ✅ ПРАВИЛЬНИЙ МАРШРУТ
//       const response = await axiosInstance.get(
//         `/admin/appointments?${queryParams}`
//       );
//       return response.data.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Failed to fetch bookings"
//       );
//     }
//   }
// );

// const bookingSlice = createSlice({
//   name: "booking",
//   initialState: {
//     loading: false,
//     success: false,
//     error: null,
//     bookings: [],
//     lastCreatedBooking: null,
//   },
//   reducers: {
//     resetBookingState: (state) => {
//       state.loading = false;
//       state.success = false;
//       state.error = null;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//     clearSuccess: (state) => {
//       state.success = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // ✅ Create booking
//       .addCase(createBooking.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(createBooking.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.lastCreatedBooking = action.payload;
//         if (state.bookings.length > 0) {
//           state.bookings.unshift(action.payload);
//         }
//       })
//       .addCase(createBooking.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.success = false;
//       })
//       // ✅ Fetch bookings
//       .addCase(fetchBookings.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchBookings.fulfilled, (state, action) => {
//         state.loading = false;
//         state.bookings = action.payload || [];
//       })
//       .addCase(fetchBookings.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { resetBookingState, clearError, clearSuccess } =
//   bookingSlice.actions;
// export default bookingSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const createBooking = createAsyncThunk(
  "booking/createBooking",
  async (formData, { rejectWithValue }) => {
    try {
      console.log("Sending booking data:", formData);

      const response = await axiosInstance.post("/appointments", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Booking response:", response.data);
      return response.data.data;
    } catch (error) {
      console.error("Booking error:", error.response?.data || error.message);

      // ✅ Покращена обробка помилок
      if (error.response?.data?.errors) {
        const errorMessages = error.response.data.errors
          .map((err) => `${err.field}: ${err.message}`)
          .join(", ");
        return rejectWithValue(errorMessages);
      }

      // ✅ Спеціальна обробка помилки конфлікту часу
      if (error.response?.status === 409) {
        return rejectWithValue(
          "This time slot is no longer available. Please refresh the page and select a different time."
        );
      }

      return rejectWithValue(
        error.response?.data?.message || error.message || "Booking failed"
      );
    }
  }
);

// ✅ Отримання записів для адміна
export const fetchBookings = createAsyncThunk(
  "booking/fetchBookings",
  async (params = {}, { rejectWithValue }) => {
    try {
      const queryParams = new URLSearchParams(params).toString();
      const response = await axiosInstance.get(
        `/admin/appointments?${queryParams}`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch bookings"
      );
    }
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    loading: false,
    success: false,
    error: null,
    bookings: [],
    lastCreatedBooking: null,
  },
  reducers: {
    resetBookingState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // ✅ Create booking
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.lastCreatedBooking = action.payload;
        if (state.bookings.length > 0) {
          state.bookings.unshift(action.payload);
        }
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      // ✅ Fetch bookings
      .addCase(fetchBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload || [];
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetBookingState, clearError, clearSuccess } =
  bookingSlice.actions;
export default bookingSlice.reducer;
