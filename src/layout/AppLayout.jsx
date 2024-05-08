import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


function AppLayout({ component }) {
  let sessionId = JSON.parse(localStorage.getItem("sessionId"));
  

  if (sessionId !== null) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return (
    <>
     { component }
      {/* <ErrorMessageModal /> */}
    </>
  );
}

export default AppLayout;
