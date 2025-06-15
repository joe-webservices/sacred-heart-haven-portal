
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Search, Phone, Mail, MapPin } from 'lucide-react';

const StudentsManagement = () => {
  const students = [
    {
      id: 1,
      name: "John Doe",
      rollNo: "SJC21CS001",
      roomNo: "A-101",
      department: "Computer Science",
      year: "3rd Year",
      phone: "+91 98765 43210",
      email: "john.doe@sjctrichy.edu.in",
      status: "active",
      feeStatus: "paid"
    },
    // Add more mock students...
  ];

  return (
    <Layout>
      <div className="py-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2 font-playfair">Students Management</h1>
            <p className="text-gray-600 text-lg">Manage and monitor assigned students</p>
          </div>

          {/* Search and Filters */}
          <Card className="shadow-lg mb-8">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search students by name, roll number, or room..." className="pl-10" />
                </div>
                <Button>Search</Button>
              </div>
            </CardContent>
          </Card>

          {/* Students Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student) => (
              <Card key={student.id} className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="font-playfair">{student.name}</CardTitle>
                        <p className="text-sm text-gray-600">{student.rollNo}</p>
                      </div>
                    </div>
                    <Badge className={student.status === 'active' ? 'bg-green-500' : 'bg-red-500'}>
                      {student.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>Room {student.roomNo}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span>{student.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span>{student.phone}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <Badge variant="outline">{student.department}</Badge>
                      <Badge className={student.feeStatus === 'paid' ? 'bg-green-500' : 'bg-red-500'}>
                        Fee {student.feeStatus}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentsManagement;
