import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Database, Users, Calendar, ChartBar, ShoppingCart } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigation = [
    { name: "Dashboard", icon: Database, path: "/" },
    { name: "Inventory", icon: ShoppingCart, path: "/inventory" },
    { name: "Employees", icon: Users, path: "/employees" },
    { name: "Attendance", icon: Calendar, path: "/attendance" },
    { name: "Analytics", icon: ChartBar, path: "/analytics" },
  ];

  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 ease-in-out z-50",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!isCollapsed && (
            <span className="text-xl font-semibold text-gray-800">TileTrack</span>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? "→" : "←"}
          </button>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg transition-all",
                    "hover:bg-gray-100",
                    location.pathname === item.path
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "text-gray-700"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {!isCollapsed && (
                    <span className="ml-3 text-sm font-medium">{item.name}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;