
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TrendingUp, DollarSign, AlertTriangle, CheckCircle, Search } from 'lucide-react';

const PaymentTracking = () => {
  const paymentStats = {
    totalRevenue: 3500000,
    pendingPayments: 175000,
    completedToday: 50000,
    overdueCount: 25
  };

  const recentPayments = [
    {
      id: 1,
      studentName: "John Doe",
      rollNo: "SJC21CS001",
      type: "Mess Fee",
      amount: 7000,
      status: "completed",
      date: "2024-01-15",
      transactionId: "TXN123456789"
    },
    // Add more mock payments...
  ];

  return (
    <Layout>
      <div className="py-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2 font-playfair">Payment Tracking</h1>
            <p className="text-gray-600 text-lg">Monitor and manage all fee payments</p>
          </div>

          {/* Payment Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-500 mb-2">₹{(paymentStats.totalRevenue / 100000).toFixed(1)}L</h3>
                <p className="text-gray-600">Total Revenue</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-500 mb-2">₹{(paymentStats.pendingPayments / 1000).toFixed(0)}K</h3>
                <p className="text-gray-600">Pending Payments</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-500 mb-2">₹{(paymentStats.completedToday / 1000).toFixed(0)}K</h3>
                <p className="text-gray-600">Collected Today</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-500 mb-2">{paymentStats.overdueCount}</h3>
                <p className="text-gray-600">Overdue Payments</p>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filters */}
          <Card className="shadow-lg mb-8">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search by student name, roll number, or transaction ID..." className="pl-10" />
                </div>
                <Button>Search</Button>
                <Button variant="outline">Export Report</Button>
              </div>
            </CardContent>
          </Card>

          {/* Payment Records */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-playfair">Payment Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Student</th>
                      <th className="text-left p-4">Payment Type</th>
                      <th className="text-left p-4">Amount</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-left p-4">Date</th>
                      <th className="text-left p-4">Transaction ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentPayments.map((payment) => (
                      <tr key={payment.id} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <div>
                            <p className="font-medium">{payment.studentName}</p>
                            <p className="text-sm text-gray-600">{payment.rollNo}</p>
                          </div>
                        </td>
                        <td className="p-4">{payment.type}</td>
                        <td className="p-4 font-bold text-green-600">₹{payment.amount.toLocaleString()}</td>
                        <td className="p-4">
                          <Badge className={payment.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}>
                            {payment.status}
                          </Badge>
                        </td>
                        <td className="p-4">{new Date(payment.date).toLocaleDateString()}</td>
                        <td className="p-4 text-sm text-gray-600">{payment.transactionId}</td>
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

export default PaymentTracking;
