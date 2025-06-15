
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { User, Bell, FileText, CreditCard, Calendar, Home } from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="py-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2 font-playfair">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-gray-600 text-lg">Here's your hostel dashboard overview</p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-primary">{user?.roomNo}</h3>
                <p className="text-gray-600">Room Number</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-hostel-secondary">{user?.rollNo}</h3>
                <p className="text-gray-600">Roll Number</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-green-600">Paid</h3>
                <p className="text-gray-600">Fee Status</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-blue-600">3</h3>
                <p className="text-gray-600">New Notices</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6 font-playfair">Quick Actions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/student/leave-application">
                <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Apply for Leave</h3>
                    <p className="text-gray-600 mb-4">Submit a new leave application</p>
                    <Button className="w-full">Apply Now</Button>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/student/payment">
                <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Pay Mess Fee</h3>
                    <p className="text-gray-600 mb-4">Pay your monthly mess fees</p>
                    <Button className="w-full">Pay Now</Button>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/student/notices">
                <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Bell className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">View Notices</h3>
                    <p className="text-gray-600 mb-4">Check latest announcements</p>
                    <Button className="w-full">View All</Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-playfair">Recent Leave Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium">Home Visit</p>
                      <p className="text-sm text-gray-600">Jan 15-17, 2024</p>
                    </div>
                    <Badge className="bg-green-500">Approved</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <p className="font-medium">Medical Checkup</p>
                      <p className="text-sm text-gray-600">Jan 20, 2024</p>
                    </div>
                    <Badge variant="secondary">Pending</Badge>
                  </div>
                </div>
                <Link to="/student/leave-status">
                  <Button variant="outline" className="w-full mt-4">View All Applications</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-playfair">Latest Notices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border-l-4 border-primary bg-blue-50">
                    <p className="font-medium">Mess Fee Due</p>
                    <p className="text-sm text-gray-600">Please pay your monthly mess fees by 15th January</p>
                    <p className="text-xs text-gray-500 mt-1">Posted 2 days ago</p>
                  </div>
                  <div className="p-3 border-l-4 border-secondary bg-amber-50">
                    <p className="font-medium">Room Inspection</p>
                    <p className="text-sm text-gray-600">Room inspection scheduled for January 25th</p>
                    <p className="text-xs text-gray-500 mt-1">Posted 5 days ago</p>
                  </div>
                </div>
                <Link to="/student/notices">
                  <Button variant="outline" className="w-full mt-4">View All Notices</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
