
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, User, Edit, Trash2 } from 'lucide-react';

const ProfileManagement = () => {
  const students = [
    {
      id: 1,
      name: "John Doe",
      rollNo: "SJC21CS001",
      roomNo: "A-101",
      department: "Computer Science",
      year: "3rd Year",
      email: "john.doe@sjctrichy.edu.in",
      phone: "+91 98765 43210",
      status: "active",
      admissionDate: "2021-07-15"
    },
    // Add more mock students...
  ];

  return (
    <Layout>
      <div className="py-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2 font-playfair">Profile Management</h1>
            <p className="text-gray-600 text-lg">Manage all student profiles and records</p>
          </div>

          {/* Search and Actions */}
          <Card className="shadow-lg mb-8">
            <CardContent className="p-6">
              <div className="flex gap-4 items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search by name, roll number, room..." className="pl-10" />
                </div>
                <Button>Search</Button>
                <Button variant="outline">Export Data</Button>
                <Button>Add Student</Button>
              </div>
            </CardContent>
          </Card>

          {/* Students Table */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-playfair">Student Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Student</th>
                      <th className="text-left p-4">Room</th>
                      <th className="text-left p-4">Department</th>
                      <th className="text-left p-4">Contact</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-left p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="font-medium">{student.name}</p>
                              <p className="text-sm text-gray-600">{student.rollNo}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">{student.roomNo}</td>
                        <td className="p-4">
                          <div>
                            <p>{student.department}</p>
                            <p className="text-sm text-gray-600">{student.year}</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <p className="text-sm">{student.email}</p>
                            <p className="text-sm text-gray-600">{student.phone}</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className={student.status === 'active' ? 'bg-green-500' : 'bg-red-500'}>
                            {student.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileManagement;
