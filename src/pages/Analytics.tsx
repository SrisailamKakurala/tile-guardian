import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";

const salesData = [
  { month: "Jan", sales: 4000, profit: 2400 },
  { month: "Feb", sales: 3000, profit: 1398 },
  { month: "Mar", sales: 2000, profit: 9800 },
  { month: "Apr", sales: 2780, profit: 3908 },
  { month: "May", sales: 1890, profit: 4800 },
  { month: "Jun", sales: 2390, profit: 3800 },
];

const inventoryData = [
  { name: "Ceramic Tiles", stock: 340, sold: 240 },
  { name: "Porcelain Tiles", stock: 280, sold: 198 },
  { name: "Marble Tiles", stock: 150, sold: 98 },
  { name: "Granite Tiles", stock: 190, sold: 150 },
  { name: "Mosaic Tiles", stock: 120, sold: 80 },
];

const attendanceData = [
  { day: "Mon", present: 45, absent: 5 },
  { day: "Tue", present: 48, absent: 2 },
  { day: "Wed", present: 47, absent: 3 },
  { day: "Thu", present: 44, absent: 6 },
  { day: "Fri", present: 46, absent: 4 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Sales</p>
              <h3 className="text-2xl font-bold mt-2">₹1,234,567</h3>
            </div>
            <span className="flex items-center text-green-500">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-sm ml-1">12%</span>
            </span>
          </div>
          <Progress value={75} className="mt-4" />
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Inventory</p>
              <h3 className="text-2xl font-bold mt-2">1,080</h3>
            </div>
            <span className="flex items-center text-red-500">
              <ArrowDownRight className="w-4 h-4" />
              <span className="text-sm ml-1">8%</span>
            </span>
          </div>
          <Progress value={60} className="mt-4" />
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Employee Attendance</p>
              <h3 className="text-2xl font-bold mt-2">92%</h3>
            </div>
            <span className="flex items-center text-green-500">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm ml-1">3%</span>
            </span>
          </div>
          <Progress value={92} className="mt-4" />
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Revenue Growth</p>
              <h3 className="text-2xl font-bold mt-2">15.2%</h3>
            </div>
            <span className="flex items-center text-green-500">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-sm ml-1">2%</span>
            </span>
          </div>
          <Progress value={65} className="mt-4" />
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
          <ChartContainer className="h-[300px]" config={{}}>
            <AreaChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#2DD4BF"
                fill="#2DD4BF"
                fillOpacity={0.3}
              />
              <Area
                type="monotone"
                dataKey="profit"
                stroke="#6366F1"
                fill="#6366F1"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ChartContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Inventory Status</h3>
          <ChartContainer className="h-[300px]" config={{}}>
            <BarChart data={inventoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="stock" fill="#2DD4BF" />
              <Bar dataKey="sold" fill="#6366F1" />
            </BarChart>
          </ChartContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Employee Attendance Trends</h3>
          <ChartContainer className="h-[300px]" config={{}}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="present"
                stroke="#2DD4BF"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="absent"
                stroke="#FF5A5A"
                strokeWidth={2}
              />
            </LineChart>
          </ChartContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Sales Target</span>
                <span className="text-sm font-medium text-gray-900">85%</span>
              </div>
              <Progress value={85} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Customer Satisfaction</span>
                <span className="text-sm font-medium text-gray-900">92%</span>
              </div>
              <Progress value={92} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Inventory Turnover</span>
                <span className="text-sm font-medium text-gray-900">78%</span>
              </div>
              <Progress value={78} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Employee Performance</span>
                <span className="text-sm font-medium text-gray-900">88%</span>
              </div>
              <Progress value={88} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;