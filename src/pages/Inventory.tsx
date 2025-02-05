import { Card } from "@/components/ui/card";

const Inventory = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Inventory Management</h2>
        <p className="text-gray-600">Loading inventory data...</p>
      </Card>
    </div>
  );
};

export default Inventory;