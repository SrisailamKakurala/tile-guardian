import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      <main className="ml-64 pt-16 p-6 animate-fade-in">{children}</main>
    </div>
  );
};

export default MainLayout;