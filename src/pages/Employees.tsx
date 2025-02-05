import { Card } from "@/components/ui/card";

const Employees = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Employee Management</h2>
        <p className="text-gray-600">Loading employee data...</p>
      </Card>
    </div>
  );
};

export default Employees;