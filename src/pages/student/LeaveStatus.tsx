
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle, Clock, XCircle, FileText } from 'lucide-react';

const LeaveStatus = () => {
  const leaveApplications = [
    {
      id: 1,
      type: "Home Visit",
      fromDate: "2024-01-15",
      toDate: "2024-01-17",
      reason: "Family function and festival celebration",
      status: "approved",
      appliedDate: "2024-01-10",
      approvedBy: "Dr. Mary Assistant Director",
      approvedDate: "2024-01-11"
    },
    {
      id: 2,
      type: "Medical Leave",
      fromDate: "2024-01-20",
      toDate: "2024-01-20",
      reason: "Routine medical checkup and consultation",
      status: "pending",
      appliedDate: "2024-01-18",
      approvedBy: null,
      approvedDate: null
    },
    {
      id: 3,
      type: "Emergency Leave",
      fromDate: "2024-01-05",
      toDate: "2024-01-06",
      reason: "Family emergency - grandfather hospitalized",
      status: "approved",
      appliedDate: "2024-01-04",
      approvedBy: "Dr. Mary Assistant Director",
      approvedDate: "2024-01-04"
    },
    {
      id: 4,
      type: "Casual Leave",
      fromDate: "2023-12-25",
      toDate: "2023-12-26",
      reason: "Personal work and shopping",
      status: "rejected",
      appliedDate: "2023-12-24",
      approvedBy: "Dr. Mary Assistant Director",
      approvedDate: "2023-12-24",
      rejectionReason: "Insufficient notice period"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'pending': return <Clock className="w-5 h-5 text-yellow-600" />;
      case 'rejected': return <XCircle className="w-5 h-5 text-red-600" />;
      default: return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved': return <Badge className="bg-green-500">Approved</Badge>;
      case 'pending': return <Badge variant="secondary">Pending</Badge>;
      case 'rejected': return <Badge variant="destructive">Rejected</Badge>;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'border-l-green-500 bg-green-50/50';
      case 'pending': return 'border-l-yellow-500 bg-yellow-50/50';
      case 'rejected': return 'border-l-red-500 bg-red-50/50';
      default: return '';
    }
  };

  return (
    <Layout>
      <div className="py-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2 font-playfair">Leave Status</h1>
            <p className="text-gray-600 text-lg">Track your leave applications and their approval status</p>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="shadow-md">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {leaveApplications.filter(app => app.status === 'approved').length}
                </div>
                <div className="text-sm text-gray-600">Approved</div>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {leaveApplications.filter(app => app.status === 'pending').length}
                </div>
                <div className="text-sm text-gray-600">Pending</div>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-red-600">
                  {leaveApplications.filter(app => app.status === 'rejected').length}
                </div>
                <div className="text-sm text-gray-600">Rejected</div>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{leaveApplications.length}</div>
                <div className="text-sm text-gray-600">Total</div>
              </CardContent>
            </Card>
          </div>

          {/* Applications List */}
          <div className="space-y-6">
            {leaveApplications.map((application) => (
              <Card key={application.id} className={`shadow-lg border-l-4 ${getStatusColor(application.status)}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl font-playfair">{application.type}</CardTitle>
                        {getStatusBadge(application.status)}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(application.fromDate).toLocaleDateString()} - {new Date(application.toDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          Applied: {new Date(application.appliedDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(application.status)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Reason:</h3>
                      <p className="text-gray-600">{application.reason}</p>
                    </div>
                    
                    {application.status === 'approved' && (
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="font-semibold text-green-800">Approved</span>
                        </div>
                        <p className="text-sm text-green-700">
                          Approved by {application.approvedBy} on {new Date(application.approvedDate!).toLocaleDateString()}
                        </p>
                      </div>
                    )}
                    
                    {application.status === 'pending' && (
                      <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-5 h-5 text-yellow-600" />
                          <span className="font-semibold text-yellow-800">Pending Approval</span>
                        </div>
                        <p className="text-sm text-yellow-700">
                          Your application is under review by the Assistant Director
                        </p>
                      </div>
                    )}
                    
                    {application.status === 'rejected' && (
                      <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <div className="flex items-center gap-2 mb-2">
                          <XCircle className="w-5 h-5 text-red-600" />
                          <span className="font-semibold text-red-800">Rejected</span>
                        </div>
                        <p className="text-sm text-red-700">
                          Rejected by {application.approvedBy} on {new Date(application.approvedDate!).toLocaleDateString()}
                        </p>
                        {application.rejectionReason && (
                          <p className="text-sm text-red-600 mt-1">
                            <strong>Reason:</strong> {application.rejectionReason}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Button */}
          <div className="text-center mt-8">
            <Button size="lg" className="px-8">
              <FileText className="w-4 h-4 mr-2" />
              Apply for New Leave
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeaveStatus;
