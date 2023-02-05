import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import  Header  from "../components/Header";
import  Sidebar  from "../components/Sidebar";
import Footer from "../components/Footer";

export const ProtectedLayout = () => {
  const { auth, loading } = useAuth();

  if (loading) {
    return (
      <div className="protected-layout-container">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {auth._id ? (
        <div>
          <Header />
          <div>
            <div className="d-flex flex-row gap-5">
            <Sidebar />
            <main>
              <Outlet />
            </main>
            </div>
           
            <Footer />
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
