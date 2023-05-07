import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {},
  {
    // Login reducer
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    // Register reducer
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    // Get My Profile reducer
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    // Verify reducer
    verifyRequest: (state) => {
      state.loading = true;
    },
    verifySuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    verifyFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Logout reducer
    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },

    // Clear reducer
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);

export const messageReducer = createReducer(
  {},
  {
    // Add Task Request
    addTaskRequest: (state) => {
      state.loading = true;
    },
    addTaskSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addTaskFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Update Task Request
    updateTaskRequest: (state) => {
      state.loading = true;
    },
    updateTaskSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateTaskFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Update Task Request
    deleteTaskRequest: (state) => {
      state.loading = true;
    },
    deleteTaskSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteTaskFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Clear reducer
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
