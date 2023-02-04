import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const ProtectedLayout = () => {
  const { auth, loading } = useAuth();

  if (loading) {
    return <div className="protected-layout-container">
      <div className="spinner-border text-warning" role="status">
    <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  }

  return (
    <>
      {auth._id ? (
        <main className="">
          <Outlet />
        </main>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};