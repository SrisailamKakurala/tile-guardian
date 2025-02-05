import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Package, Search, AlertTriangle } from "lucide-react";

interface TileProduct {
  id: string;
  name: string;
  category: string;
  size: string;
  price: number;
  stock: number;
  reorderPoint: number;
  lastRestocked: string;
}

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample inventory data - in a real app, this would come from an API
  const inventoryData: TileProduct[] = [
    {
      id: "1",
      name: "Ceramic Floor Tile",
      category: "Floor Tiles",
      size: "60x60cm",
      price: 24.99,
      stock: 450,
      reorderPoint: 100,
      lastRestocked: "2024-02-01",
    },
    {
      id: "2",
      name: "Porcelain Wall Tile",
      category: "Wall Tiles",
      size: "30x60cm",
      price: 19.99,
      stock: 85,
      reorderPoint: 100,
      lastRestocked: "2024-01-28",
    },
    {
      id: "3",
      name: "Mosaic Accent Tile",
      category: "Decorative",
      size: "30x30cm",
      price: 34.99,
      stock: 200,
      reorderPoint: 50,
      lastRestocked: "2024-02-03",
    },
    {
      id: "4",
      name: "Natural Stone Tile",
      category: "Floor Tiles",
      size: "45x45cm",
      price: 44.99,
      stock: 120,
      reorderPoint: 75,
      lastRestocked: "2024-01-25",
    },
    {
      id: "5",
      name: "Glass Mosaic Tile",
      category: "Wall Tiles",
      size: "15x15cm",
      price: 29.99,
      stock: 300,
      reorderPoint: 100,
      lastRestocked: "2024-02-02",
    },
  ];

  const filteredInventory = inventoryData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const lowStockItems = inventoryData.filter(
    (item) => item.stock <= item.reorderPoint
  );

  return (
    <div className="space-y-6">
      {/* Inventory Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Products</p>
              <h3 className="text-2xl font-semibold">{inventoryData.length}</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-100 rounded-full">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Low Stock Items</p>
              <h3 className="text-2xl font-semibold">{lowStockItems.length}</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-full">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Stock Value</p>
              <h3 className="text-2xl font-semibold">
                $
                {inventoryData
                  .reduce((acc, item) => acc + item.price * item.stock, 0)
                  .toLocaleString()}
              </h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Search and Table */}
      <Card className="p-6">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search inventory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Last Restocked</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.size}</TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell>{item.lastRestocked}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.stock <= item.reorderPoint
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {item.stock <= item.reorderPoint ? "Low Stock" : "In Stock"}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Inventory;