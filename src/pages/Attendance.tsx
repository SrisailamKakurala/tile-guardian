import { Card } from "@/components/ui/card";

const Attendance = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Attendance Tracking</h2>
        <p className="text-gray-600">Loading attendance data...</p>
      </Card>
    </div>
  );
};

export default Attendance;