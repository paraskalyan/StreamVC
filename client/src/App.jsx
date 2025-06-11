import { Navigate, Route, Routes } from "react-router";

import './App.css';


import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Login from "./Pages/Login.jsx";
import Notifications from "./Pages/Notifications.jsx";
import Call from "./Pages/Call.jsx";
import Chat from "./Pages/Chat.jsx";
import Onboarding from "./Pages/Onboarding.jsx";
import PageLoader from "./Pages/PageLoader.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AuthRoute from "./components/AuthRoute.jsx";
import OnboardRoute from "./components/OnboardRoute.jsx";
import Layout from "./components/Layout.jsx";
import ChatPage from "./Pages/Chat.jsx";

const App = () => {

  return (
    <div className="h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout showSidebar='true'>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthRoute><SignUp /></AuthRoute>
          }
        />
        <Route
          path="/login"
          element={
            <AuthRoute><Login /></AuthRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Layout showSidebar={true}>

                <Notifications />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/call/:id"
          element={
            <ProtectedRoute>
              <Call />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chat/:id"
          element={
            <ProtectedRoute>
              <Layout>
                <ChatPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/onboarding"
          element={
            <OnboardRoute>
              <Onboarding />
            </OnboardRoute>
          }
        />
      </Routes>

      <Toaster />
    </div>
  );
};
export default App;