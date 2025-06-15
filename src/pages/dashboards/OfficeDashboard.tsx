
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, CreditCard, Bell, FileText, TrendingUp, AlertTriangle } from 'lucide-react';

const OfficeDashboard = () => {
  return (
    <Layout>
      <div className="py-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2 font-playfair">Office Dashboard</h1>
            <p className="text-gray-600 text-lg">Administrative overview and management</p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">500</h3>
                <p className="text-gray-600">Total Students</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <CreditCard className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-green-500 mb-2">₹35L</h3>
                <p className="text-gray-600">Monthly Revenue</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-red-500 mb-2">25</h3>
                <p className="text-gray-600">Pending Payments</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-blue-500 mb-2">95%</h3>
                <p className="text-gray-600">Occupancy Rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link to="/office/profiles">
              <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Profile Management</h3>
                  <p className="text-gray-600 mb-4">Manage student profiles and records</p>
                  <Button className="w-full">Manage Profiles</Button>
                </CardContent>
              </Card>
            </Link>
            <Link to="/office/payments">
              <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Payment Tracking</h3>
                  <p className="text-gray-600 mb-4">Monitor and track fee payments</p>
                  <Button className="w-full">View Payments</Button>
                </CardContent>
              </Card>
            </Link>
            <Link to="/office/notices">
              <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Bell className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Notices Management</h3>
                  <p className="text-gray-600 mb-4">Manage hostel-wide announcements</p>
                  <Button className="w-full">Manage Notices</Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Recent Activities */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-playfair">Recent Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "John Doe", amount: "₹7,000", type: "Mess Fee", status: "completed" },
                    { name: "Jane Smith", amount: "₹41,000", type: "Hostel Fee", status: "completed" },
                    { name: "Mike Johnson", amount: "₹7,000", type: "Mess Fee", status: "pending" }
                  ].map((payment, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium">{payment.name}</p>
                        <p className="text-sm text-gray-600">{payment.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">{payment.amount}</p>
                        <Badge className={payment.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}>
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-playfair">System Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { message: "25 students have pending mess fee payments", type: "warning", time: "2 hours ago" },
                    { message: "Room A-205 maintenance request submitted", type: "info", time: "5 hours ago" },
                    { message: "Monthly revenue target achieved", type: "success", time: "1 day ago" }
                  ].map((alert, index) => (
                    <div key={index} className={`p-3 rounded-lg border-l-4 ${
                      alert.type === 'warning' ? 'border-l-yellow-500 bg-yellow-50' :
                      alert.type === 'success' ? 'border-l-green-500 bg-green-50' :
                      'border-l-blue-500 bg-blue-50'
                    }`}>
                      <p className="font-medium">{alert.message}</p>
                      <p className="text-sm text-gray-500">{alert.time}</p>
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

export default OfficeDashboard;
