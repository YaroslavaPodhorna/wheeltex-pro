// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const BASE_URL = "http://localhost:3000";

// export const loginAdmin = createAsyncThunk(
//   "admin/login",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${BASE_URL}/auth/login`, credentials, {
//         withCredentials: true,
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Login failed");
//     }
//   }
// );

// const adminAuthSlice = createSlice({
//   name: "adminAuth", // ✅ унікальне імʼя
//   initialState: {
//     loading: false,
//     error: null,
//     isAuthenticated: false,
//     admin: null,
//   },
//   reducers: {
//     logoutAdmin: (state) => {
//       state.isAuthenticated = false;
//       state.admin = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginAdmin.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginAdmin.fulfilled, (state, action) => {
//         state.loading = false;
//         state.isAuthenticated = true;
//         state.admin = action.payload.admin;
//       })
//       .addCase(loginAdmin.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logoutAdmin } = adminAuthSlice.actions;
// export default adminAuthSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
export const loginAdmin = createAsyncThunk(
  "admin/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/admin/login", credentials, {
        withCredentials: true,
      });

      // зберігаємо токен у localStorage
      if (response.data.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    loading: false,
    error: null,
    isAuthenticated: false,
    admin: null,
  },
  reducers: {
    logoutAdmin: (state) => {
      state.isAuthenticated = false;
      state.admin = null;
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.admin = action.payload.admin;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutAdmin } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
