
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell, Edit, Trash2, Plus, Eye } from 'lucide-react';

const NoticesManagement = () => {
  const notices = [
    {
      id: 1,
      title: "Mess Fee Payment Reminder",
      content: "All students are requested to pay their mess fees before January 15th to avoid late charges.",
      priority: "high",
      category: "Payment",
      author: "Office Administrator",
      publishDate: "2024-01-10",
      status: "published",
      views: 450
    },
    // Add more mock notices...
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <Layout>
      <div className="py-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2 font-playfair">Notices Management</h1>
            <p className="text-gray-600 text-lg">Create and manage hostel-wide announcements</p>
          </div>

          {/* Quick Actions */}
          <Card className="shadow-lg mb-8">
            <CardContent className="p-6">
              <div className="flex gap-4 items-center">
                <Button className="flex-1 sm:flex-none">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Notice
                </Button>
                <Button variant="outline">Manage Templates</Button>
                <Button variant="outline">Bulk Actions</Button>
              </div>
            </CardContent>
          </Card>

          {/* Notices List */}
          <div className="space-y-6">
            {notices.map((notice) => (
              <Card key={notice.id} className="shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl font-playfair">{notice.title}</CardTitle>
                        <Badge variant={getPriorityColor(notice.priority) as any}>
                          {notice.priority}
                        </Badge>
                        <Badge variant="outline">{notice.category}</Badge>
                        <Badge className={notice.status === 'published' ? 'bg-green-500' : 'bg-yellow-500'}>
                          {notice.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>By {notice.author}</span>
                        <span>Published: {new Date(notice.publishDate).toLocaleDateString()}</span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {notice.views} views
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{notice.content}</p>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline">View Details</Button>
                    <Button size="sm" variant="outline">Edit Notice</Button>
                    <Button size="sm" variant="outline">Duplicate</Button>
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

export default NoticesManagement;
