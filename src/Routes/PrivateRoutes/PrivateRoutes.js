import React, { Children, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { Spinner } from "react-bootstrap";

const PrivateRoutes = ({ Children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return Children;

  return <div></div>;
};

export default PrivateRoutes;
