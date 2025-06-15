
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { User, Mail, Phone, MapPin, GraduationCap, Calendar } from 'lucide-react';

const StudentProfile = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="py-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-8 font-playfair">Student Profile</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card className="shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="w-16 h-16 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-2">{user?.name}</h2>
                  <p className="text-gray-600 mb-4">{user?.rollNo}</p>
                  <Badge className="mb-6">{user?.department}</Badge>
                  <Button className="w-full">Edit Profile</Button>
                </CardContent>
              </Card>
            </div>

            {/* Details Cards */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair">Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="font-medium">{user?.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-gray-600">Phone</p>
                          <p className="font-medium">+91 98765 43210</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-gray-600">Home Address</p>
                          <p className="font-medium">123 Main St, Chennai, TN</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-gray-600">Department</p>
                          <p className="font-medium">{user?.department}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-gray-600">Academic Year</p>
                          <p className="font-medium">{user?.year}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-gray-600">Room Number</p>
                          <p className="font-medium">{user?.roomNo}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Academic Information */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair">Academic Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Current Semester</h3>
                      <p className="text-gray-600">Semester 6 (Final Year)</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Admission Date</h3>
                      <p className="text-gray-600">July 2021</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">CGPA</h3>
                      <p className="text-gray-600">8.7/10.0</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Expected Graduation</h3>
                      <p className="text-gray-600">May 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair">Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Father's Name</h3>
                      <p className="text-gray-600">Mr. John Doe Sr.</p>
                      <p className="text-sm text-gray-500">+91 98765 12345</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Mother's Name</h3>
                      <p className="text-gray-600">Mrs. Jane Doe</p>
                      <p className="text-sm text-gray-500">+91 98765 12346</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentProfile;
