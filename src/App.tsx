import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/inventory"
          element={
            <MainLayout>
              <Inventory />
            </MainLayout>
          }
        />
        <Route
          path="/employees"
          element={
            <MainLayout>
              <Employees />
            </MainLayout>
          }
        />
        <Route
          path="/attendance"
          element={
            <MainLayout>
              <Attendance />
            </MainLayout>
          }
        />
        <Route
          path="/analytics"
          element={
            <MainLayout>
              <Analytics />
            </MainLayout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;