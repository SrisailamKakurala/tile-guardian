import { Card } from "@/components/ui/card";
import { ShoppingCart, Users, TrendingUp, Package } from "lucide-react";

const DashboardCard = ({
  title,
  value,
  icon: Icon,
  trend,
}: {
  title: string;
  value: string;
  icon: any;
  trend: string;
}) => (
  <Card className="p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <h3 className="text-2xl font-semibold mt-1">{value}</h3>
        <p className="text-sm text-gray-600 mt-2">
          <span
            className={
              trend.startsWith("+")
                ? "text-green-500 font-medium"
                : "text-red-500 font-medium"
            }
          >
            {trend}
          </span>{" "}
          vs last month
        </p>
      </div>
      <div className="p-3 bg-primary/10 rounded-full">
        <Icon className="w-6 h-6 text-primary" />
      </div>
    </div>
  </Card>
);

const Dashboard = () => {
  const metrics = [
    {
      title: "Total Inventory",
      value: "2,345",
      icon: Package,
      trend: "+12.5%",
    },
    {
      title: "Active Employees",
      value: "48",
      icon: Users,
      trend: "+2.1%",
    },
    {
      title: "Monthly Sales",
      value: "$123.4k",
      icon: ShoppingCart,
      trend: "+18.2%",
    },
    {
      title: "Revenue Growth",
      value: "32.8%",
      icon: TrendingUp,
      trend: "+4.3%",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <DashboardCard key={metric.title} {...metric} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {/* Activity items would go here */}
            <p className="text-gray-600">Loading activities...</p>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Quick action buttons would go here */}
            <button className="p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <ShoppingCart className="w-5 h-5 text-primary mb-2" />
              <span className="text-sm font-medium">New Order</span>
            </button>
            <button className="p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Users className="w-5 h-5 text-primary mb-2" />
              <span className="text-sm font-medium">Add Employee</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;