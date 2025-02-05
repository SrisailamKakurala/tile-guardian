import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Mock data - in a real app this would come from an API
const employeesData = [
  {
    id: 1,
    name: "John Smith",
    position: "Sales Manager",
    department: "Sales",
    email: "john.smith@tiles.com",
    phone: "+1 234-567-8901",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    attendance: "Present",
    joinDate: "2022-01-15",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Inventory Specialist",
    department: "Warehouse",
    email: "sarah.j@tiles.com",
    phone: "+1 234-567-8902",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    attendance: "Present",
    joinDate: "2022-03-20",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Sales Representative",
    department: "Sales",
    email: "m.chen@tiles.com",
    phone: "+1 234-567-8903",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    attendance: "On Leave",
    joinDate: "2022-06-10",
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "HR Manager",
    department: "Human Resources",
    email: "e.davis@tiles.com",
    phone: "+1 234-567-8904",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    attendance: "Present",
    joinDate: "2021-11-30",
  },
];

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employeesData.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Employee Management</h2>
        <Input
          placeholder="Search employees..."
          className="max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEmployees.map((employee) => (
          <Card key={employee.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={employee.image} alt={employee.name} />
                  <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="font-semibold text-lg">{employee.name}</h3>
                  <p className="text-sm text-muted-foreground">{employee.position}</p>
                </div>
                <div className="w-full text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Department:</span>
                    <span>{employee.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className={employee.attendance === "Present" ? "text-green-600" : "text-yellow-600"}>
                      {employee.attendance}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Employee Details</h3>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.phone}</TableCell>
                    <TableCell>{employee.joinDate}</TableCell>
                    <TableCell>
                      <span className={employee.attendance === "Present" ? "text-green-600" : "text-yellow-600"}>
                        {employee.attendance}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Employees;