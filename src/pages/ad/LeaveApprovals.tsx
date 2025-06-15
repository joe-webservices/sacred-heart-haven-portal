
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Clock, User } from 'lucide-react';

const LeaveApprovals = () => {
  const leaveApplications = [
    {
      id: 1,
      studentName: "John Doe",
      rollNo: "SJC21CS001",
      type: "Medical Leave",
      fromDate: "2024-01-20",
      toDate: "2024-01-20",
      reason: "Routine medical checkup",
      status: "pending",
      appliedDate: "2024-01-18",
      urgent: false
    },
    // Add more mock applications...
  ];

  const handleApprove = (id: number) => {
    console.log('Approving application:', id);
  };

  const handleReject = (id: number) => {
    console.log('Rejecting application:', id);
  };

  return (
    <Layout>
      <div className="py-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2 font-playfair">Leave Approvals</h1>
            <p className="text-gray-600 text-lg">Review and approve student leave applications</p>
          </div>

          <div className="space-y-6">
            {leaveApplications.map((application) => (
              <Card key={application.id} className="shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="font-playfair">{application.studentName}</CardTitle>
                        <p className="text-sm text-gray-600">{application.rollNo}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {application.urgent && <Badge variant="destructive">Urgent</Badge>}
                      <Badge variant="secondary">{application.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Leave Details</h3>
                      <p className="text-gray-600">
                        <strong>Duration:</strong> {new Date(application.fromDate).toLocaleDateString()} - {new Date(application.toDate).toLocaleDateString()}
                      </p>
                      <p className="text-gray-600">
                        <strong>Reason:</strong> {application.reason}
                      </p>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button 
                        onClick={() => handleApprove(application.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button 
                        onClick={() => handleReject(application.id)}
                        variant="destructive"
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
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

export default LeaveApprovals;
