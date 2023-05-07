import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/userAction";
import { Toaster, toast } from "react-hot-toast";
// import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Loader from "./components/Loader";
import Verify from "./components/Verify";
import { ProtectedRoute } from "protected-route-react";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  onWindowMatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
      onWindowMatch();
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const dispatch = useDispatch();

  const { isAuthenticated, user, message, error, loading } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative w-full h-screen bg-Very-Light-Gray dark:bg-Very-Dark-Blue">
          <header className="w-full h-64">
            <img
              src={
                theme === "dark"
                  ? "/bg-desktop-dark.jpg"
                  : "/bg-desktop-light.jpg"
              }
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </header>
          <div className="absolute top-16 left-1/2 max-w-xl w-full -translate-x-1/2 px-4">
            <Header handleThemeSwitch={handleThemeSwitch} theme={theme} />
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect={"/"}>
                    <Login />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect={"/verify"}>
                    <Register />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    isAuthenticated={isAuthenticated}
                    redirect={"/profile"}>
                    <Profile user={user} />
                  </ProtectedRoute>
                }
              />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/verify" element={<Verify />} />
            </Routes>
            <Toaster />
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
