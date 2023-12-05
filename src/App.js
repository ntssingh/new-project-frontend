import React, { useEffect } from "react";
import{Route, Routes, BrowserRouter} from "react-router-dom";
import {SignPage, ActivationPage, TablePage, AnalyticsPage, ErrorPage} from "./Routes/routes"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { loadUser } from "./redux/actions/user";
import ProfileSidebar from "./Components/ProfileSidebar";


function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Routes>
      <Route path="/" element={<SignPage/>}/>
     
      <Route path="/activation/:activation_token" element={<ActivationPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
      <Route path="/dashboard/analytics" element={<ProtectedRoute><ProfileSidebar> <AnalyticsPage /></ProfileSidebar></ProtectedRoute>}/>
      <Route path="/dashboard/table" element={<ProtectedRoute><ProfileSidebar><TablePage /></ProfileSidebar></ProtectedRoute>} />
    </Routes>

    </Routes>

    

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
