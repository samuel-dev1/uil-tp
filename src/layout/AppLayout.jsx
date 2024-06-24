import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function AppLayout({ component }) {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log('token', token);

  if (token === null) {
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
