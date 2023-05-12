import axios from "axios";
import { server } from "../store";

// Register
export const register = (formdata) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });

    const { data } = await axios.post(`${server}/register`, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.message });
  }
};

// Login Action
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
  }
};

// Get My Profile Action
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });
    dispatch({ type: "loadUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message });
  }
};

// Verification Action
export const verification = (otp) => async (dispatch) => {
  try {
    dispatch({ type: "verifyRequest" });

    const { data } = await axios.post(
      `${server}/verify`,
      { otp },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "verifySuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "verifyFail", payload: error.response.data.message });
  }
};

// Logout
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    dispatch({ type: "logoutSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "logoutFail", payload: error.response.data.message });
  }
};

// Add Task Action
export const addTask = (title) => async (dispatch) => {
  try {
    dispatch({ type: "addTaskRequest" });

    const { data } = await axios.post(
      `${server}/newtask`,
      { title },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "addTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "addTaskFail", payload: error.response.data.message });
  }
};

// Update Task Action
export const updateTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "updateTaskRequest" });

    const { data } = await axios.get(`${server}/task/${taskId}`, {
      withCredentials: true,
    });
    dispatch({ type: "updateTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "updateTaskFail", payload: error.response.data.message });
  }
};

// Delete Task Action
export const deleteTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteTaskRequest" });

    const { data } = await axios.delete(`${server}/task/${taskId}`, {
      withCredentials: true,
    });
    dispatch({ type: "deleteTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "deleteTaskFail", payload: error.response.data.message });
  }
};

// Delete Task Action
export const deletecompletedTask = () => async (dispatch) => {
  try {
    dispatch({ type: "deletecompletedTaskRequest" });

    const { data } = await axios.delete(`${server}/clearcompleted`, {
      withCredentials: true,
    });
    dispatch({ type: "deletecompletedTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deletecompletedTaskFail",
      payload: error.response.data.message,
    });
  }
};

// Update Profile Action
export const updateProfile = (formdata) => async (dispatch) => {
  try {
    dispatch({ type: "updateProfileRequest" });

    const { data } = await axios.put(`${server}/updateprofile`, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    dispatch({ type: "updateProfileSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateProfileFail",
      payload: error.response.data.message,
    });
  }
};

// Change Password Action
export const changePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: "updatePasswordRequest" });

      const { data } = await axios.put(
        `${server}/updatepassword`,
        { oldPassword, newPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({ type: "updatePasswordSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "updatePasswordFail",
        payload: error.response.data.message,
      });
    }
  };

// Forgot Password Action
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "forgotPasswordRequest" });

    const { data } = await axios.post(
      `${server}/forgotpassword`,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "forgotPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "forgotPasswordFail",
      payload: error.response.data.message,
    });
  }
};

// Reset Password Action
export const resetPassword = (otp, newPassword) => async (dispatch) => {
  try {
    dispatch({ type: "resetPasswordRequest" });

    const { data } = await axios.put(
      `${server}/resetpassword`,
      { otp, newPassword },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "resetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "resetPasswordFail",
      payload: error.response.data.message,
    });
  }
};
