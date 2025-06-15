
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, Home, User, Calendar, FileText } from 'lucide-react';

const Index = () => {
  const notices = [
    {
      id: 1,
      title: "Mess Fee Payment Due",
      content: "All students are requested to pay their mess fees by 15th of this month.",
      date: "2024-01-10",
      priority: "high"
    },
    {
      id: 2,
      title: "Room Inspection Schedule",
      content: "Room inspection will be conducted on January 20th, 2024 from 9:00 AM.",
      date: "2024-01-08",
      priority: "medium"
    },
    {
      id: 3,
      title: "Holiday Leave Applications",
      content: "Students planning to go home for the upcoming holiday must submit leave applications.",
      date: "2024-01-05",
      priority: "medium"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
              Welcome to Sacred Heart Hostel
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              A premier residential facility at St. Joseph's College, Trichy, providing a home away from home for our students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/student/login">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Student Portal
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
                <p className="text-gray-600">Students</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-hostel-secondary mb-2">10</h3>
                <p className="text-gray-600">Assistant Directors</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
                <p className="text-gray-600">Support</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-hostel-secondary mb-2">50+</h3>
                <p className="text-gray-600">Years Legacy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notices Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4 font-playfair">Latest Notices</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with important announcements and information
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {notices.map((notice) => (
              <Card key={notice.id} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={notice.priority === 'high' ? 'destructive' : 'secondary'}>
                      {notice.priority === 'high' ? 'Urgent' : 'Notice'}
                    </Badge>
                    <span className="text-sm text-gray-500">{notice.date}</span>
                  </div>
                  <CardTitle className="text-lg">{notice.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {notice.content}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4 font-playfair">Quick Access</h2>
            <p className="text-xl text-gray-600">Access important services and information</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Student Portal</h3>
                <p className="text-gray-600 mb-6">Access your dashboard, apply for leave, view notices and more</p>
                <Link to="/student/login">
                  <Button className="w-full">Access Portal</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Rules & Regulations</h3>
                <p className="text-gray-600 mb-6">Read the hostel rules and guidelines for students</p>
                <Link to="/rules">
                  <Button variant="outline" className="w-full">View Rules</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bell className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Fee Structure</h3>
                <p className="text-gray-600 mb-6">View hostel and mess fee details and payment policies</p>
                <Link to="/fees">
                  <Button variant="outline" className="w-full">View Fees</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-playfair">Need Help?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our dedicated staff is here to assist you 24/7. Contact us for any queries or support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Call: +91 431 270 1501
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Email: sacredheart@sjctrichy.edu.in
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
