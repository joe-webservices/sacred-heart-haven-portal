
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, FileText, Bell, CheckCircle, Clock, XCircle } from 'lucide-react';

const ADDashboard = () => {
  return (
    <Layout>
      <div className="py-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2 font-playfair">Assistant Director Dashboard</h1>
            <p className="text-gray-600 text-lg">Manage students and oversee hostel operations</p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">45</h3>
                <p className="text-gray-600">Assigned Students</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-yellow-500 mb-2">8</h3>
                <p className="text-gray-600">Pending Approvals</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-green-500 mb-2">12</h3>
                <p className="text-gray-600">Approved Today</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <Bell className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-blue-500 mb-2">3</h3>
                <p className="text-gray-600">Active Notices</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link to="/ad/leave-approvals">
              <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Leave Approvals</h3>
                  <p className="text-gray-600 mb-4">Review and approve student leave requests</p>
                  <Button className="w-full">Review Applications</Button>
                </CardContent>
              </Card>
            </Link>
            <Link to="/ad/students">
              <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Manage Students</h3>
                  <p className="text-gray-600 mb-4">View and manage assigned students</p>
                  <Button className="w-full">View Students</Button>
                </CardContent>
              </Card>
            </Link>
            <Link to="/ad/post-notices">
              <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Bell className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Post Notices</h3>
                  <p className="text-gray-600 mb-4">Create announcements for students</p>
                  <Button className="w-full">Create Notice</Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Recent Activities */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-playfair">Pending Leave Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "John Doe", type: "Medical Leave", date: "Jan 20", urgent: true },
                    { name: "Jane Smith", type: "Home Visit", date: "Jan 22-24", urgent: false },
                    { name: "Mike Johnson", type: "Emergency", date: "Jan 21", urgent: true }
                  ].map((app, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                      <div>
                        <p className="font-medium">{app.name}</p>
                        <p className="text-sm text-gray-600">{app.type} - {app.date}</p>
                      </div>
                      <div className="flex gap-2">
                        {app.urgent && <Badge variant="destructive">Urgent</Badge>}
                        <Badge variant="secondary">Pending</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-playfair">Recent Approvals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Alice Brown", type: "Casual Leave", date: "Jan 18", status: "approved" },
                    { name: "Bob Wilson", type: "Home Visit", date: "Jan 17-19", status: "approved" },
                    { name: "Carol Davis", type: "Medical", date: "Jan 16", status: "rejected" }
                  ].map((app, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium">{app.name}</p>
                        <p className="text-sm text-gray-600">{app.type} - {app.date}</p>
                      </div>
                      <Badge className={app.status === 'approved' ? 'bg-green-500' : 'bg-red-500'}>
                        {app.status === 'approved' ? 'Approved' : 'Rejected'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ADDashboard;
