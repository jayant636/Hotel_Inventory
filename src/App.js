import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Cabins from "./pages/Cabins";
import Booking from "./pages/Booking";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import Users from "./pages/Users";
import AppLayout from "./ui/AppLayout";
import { QueryClient } from "@tanstack/react-query";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/cabins" element={<Cabins />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/account" element={<Account />} />

          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
