import React, { useEffect } from "react";
import{Route, Routes, BrowserRouter} from "react-router-dom";
import {SignPage, ActivationPage, TablePage, AnalyticsPage} from "./Routes/routes"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { loadUser } from "./redux/actions/user";
import Form from "./Components/form/datacollection";
import ProfileSidebar from "./Components/ProfileSidebar";


function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignPage/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/activation/:activation_token" element={<ActivationPage/>}/>

    </Routes>

    <ProtectedRoute>
    <ProfileSidebar>
        <Routes>
      <Route path="/dashboard/analytics" element={ <AnalyticsPage />}/>
      <Route path="/dashboard/table" element={ <TablePage />} />
      </Routes>
      </ProfileSidebar>
      </ProtectedRoute>

    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;
