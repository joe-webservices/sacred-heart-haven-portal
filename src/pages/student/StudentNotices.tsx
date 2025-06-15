
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, AlertTriangle } from 'lucide-react';

const StudentNotices = () => {
  const notices = [
    {
      id: 1,
      title: "Mess Fee Payment Reminder",
      content: "Dear students, please pay your monthly mess fees before January 15th to avoid late charges. Payment can be made through the online portal or at the hostel office.",
      date: "2024-01-10",
      priority: "high",
      category: "Payment",
      readStatus: false
    },
    {
      id: 2,
      title: "Room Inspection Schedule",
      content: "Annual room inspection will be conducted on January 25th, 2024, starting from 9:00 AM. Please ensure your rooms are clean and organized.",
      date: "2024-01-08",
      priority: "medium",
      category: "General",
      readStatus: true
    },
    {
      id: 3,
      title: "Holiday Leave Applications",
      content: "Students planning to go home for the upcoming Pongal holiday (January 14-16) must submit their leave applications before January 12th.",
      date: "2024-01-05",
      priority: "medium",
      category: "Leave",
      readStatus: false
    },
    {
      id: 4,
      title: "Library Timing Changes",
      content: "The hostel library will have extended hours during exam period (January 20-30). New timings: 6:00 AM to 11:00 PM.",
      date: "2024-01-03",
      priority: "low",
      category: "Facility",
      readStatus: true
    },
    {
      id: 5,
      title: "Mess Menu Update",
      content: "New vegetarian options have been added to the mess menu starting this week. Special dietary requirements can be discussed with the mess committee.",
      date: "2024-01-01",
      priority: "low",
      category: "Mess",
      readStatus: true
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      default: return 'outline';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertTriangle className="w-4 h-4" />;
      case 'medium': return <Bell className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <Layout>
      <div className="py-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2 font-playfair">Notices & Announcements</h1>
            <p className="text-gray-600 text-lg">Stay updated with the latest hostel news and important information</p>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="shadow-md">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-red-600">{notices.filter(n => n.priority === 'high').length}</div>
                <div className="text-sm text-gray-600">Urgent</div>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-amber-600">{notices.filter(n => n.priority === 'medium').length}</div>
                <div className="text-sm text-gray-600">Important</div>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{notices.filter(n => !n.readStatus).length}</div>
                <div className="text-sm text-gray-600">Unread</div>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{notices.length}</div>
                <div className="text-sm text-gray-600">Total</div>
              </CardContent>
            </Card>
          </div>

          {/* Notices List */}
          <div className="space-y-6">
            {notices.map((notice) => (
              <Card key={notice.id} className={`shadow-lg transition-all hover:shadow-xl ${!notice.readStatus ? 'border-l-4 border-l-primary bg-blue-50/30' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl font-playfair">{notice.title}</CardTitle>
                        {!notice.readStatus && (
                          <Badge variant="secondary" className="text-xs">New</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(notice.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                        <Badge variant="outline">{notice.category}</Badge>
                        <Badge variant={getPriorityColor(notice.priority) as any} className="flex items-center gap-1">
                          {getPriorityIcon(notice.priority)}
                          {notice.priority.charAt(0).toUpperCase() + notice.priority.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{notice.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No more notices message */}
          <div className="text-center mt-12 p-8">
            <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">You're all caught up with the latest notices!</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentNotices;
