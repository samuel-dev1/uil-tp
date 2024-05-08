import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/index";
import AppLayout from "./layout/AppLayout";

export const UserContext = React.createContext();

function App() {

  const renderRoutes = (routes) => {
    return routes.map((route, index) => {
      if (route.children) {
        return (
          <Route
            key={index}
            path={route.path}
            element={<AppLayout component={route.component} />}
          >
            {renderRoutes(route.children)}
          </Route>
        );
      } else {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              route.standalone ? (
                route.component
              ) : (
                <AppLayout component={route.component} />
              )
            }
          />
        );
      }
    });
  };

  return (
    <>
     
        <div>
          <Routes>
            {renderRoutes(routes)}
            {/* <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </div>
    </>
  );
}

export default App;
