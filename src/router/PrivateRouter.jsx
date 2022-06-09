import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useApp } from '../contexts/provider';

function PrivateRouter() {
  const { isAuth } = useApp();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRouter;
