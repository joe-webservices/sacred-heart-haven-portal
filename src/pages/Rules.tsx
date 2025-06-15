
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Home, User, Bell } from 'lucide-react';

const Rules = () => {
  return (
    <Layout>
      <div className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-6 font-playfair">Rules & Regulations</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These guidelines ensure a harmonious living environment and help maintain the academic atmosphere 
              conducive to learning and personal growth.
            </p>
          </div>

          {/* General Rules */}
          <div className="mb-12">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-primary text-white">
                <CardTitle className="text-2xl font-playfair flex items-center">
                  <Home className="mr-3" />
                  General Hostel Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4">Discipline & Conduct</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Students must maintain absolute silence during study hours (6:00 PM - 10:00 PM)
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Ragging in any form is strictly prohibited and will result in immediate expulsion
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Respectful behavior towards staff, wardens, and fellow students is mandatory
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Damage to hostel property will be charged to the responsible student
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Political activities and meetings are not permitted within hostel premises
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4">Safety & Security</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        All students must carry their ID cards at all times within the hostel
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Visitors are allowed only during specified hours with proper authorization
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Students are responsible for the security of their personal belongings
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Room keys must not be shared with unauthorized persons
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Fire safety equipment must not be tampered with or misused
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timing Rules */}
          <div className="mb-12">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-secondary text-white">
                <CardTitle className="text-2xl font-playfair flex items-center">
                  <Clock className="mr-3" />
                  Timing & Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-hostel-secondary mb-4">Daily Schedule</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="font-medium">Wake Up Bell</span>
                        <Badge variant="outline">5:30 AM</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="font-medium">Morning Prayer</span>
                        <Badge variant="outline">6:00 AM</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="font-medium">Breakfast</span>
                        <Badge variant="outline">7:00 AM</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="font-medium">College Hours</span>
                        <Badge variant="outline">8:00 AM - 4:00 PM</Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-hostel-secondary mb-4">Evening Schedule</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="font-medium">Evening Snacks</span>
                        <Badge variant="outline">4:30 PM</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="font-medium">Sports Time</span>
                        <Badge variant="outline">5:00 PM - 6:00 PM</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="font-medium">Study Hours</span>
                        <Badge variant="outline">6:00 PM - 10:00 PM</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="font-medium">Dinner</span>
                        <Badge variant="outline">8:00 PM - 9:00 PM</Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-hostel-secondary mb-4">Important Timings</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="font-medium">Gates Close</span>
                        <Badge variant="destructive">10:00 PM</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="font-medium">Lights Out</span>
                        <Badge variant="destructive">10:30 PM</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="font-medium">Visitor Hours</span>
                        <Badge variant="outline">2:00 PM - 6:00 PM</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="font-medium">Library Access</span>
                        <Badge variant="outline">6:00 AM - 10:00 PM</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Room Rules */}
          <div className="mb-12">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-primary text-white">
                <CardTitle className="text-2xl font-playfair flex items-center">
                  <User className="mr-3" />
                  Room & Personal Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4">Room Maintenance</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Rooms must be kept clean and tidy at all times
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Beds should be made properly every morning
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Personal belongings should be organized and stored properly
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Electrical appliances usage is restricted to approved items only
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Room changes are not permitted without prior approval
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4">Personal Conduct</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Proper dress code must be maintained within hostel premises
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Smoking, alcohol, and drugs are strictly prohibited
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Gambling and betting in any form is not allowed
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Mobile phone usage is restricted during study hours
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Music and entertainment must not disturb others
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leave Rules */}
          <div className="mb-12">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-secondary text-white">
                <CardTitle className="text-2xl font-playfair flex items-center">
                  <Bell className="mr-3" />
                  Leave & Attendance Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-hostel-secondary mb-4">Leave Application Process</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        All leave applications must be submitted at least 24 hours in advance
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Parental consent is mandatory for leaves exceeding 2 days
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Emergency leaves require immediate notification to Assistant Director
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Valid reasons and documentation required for medical leaves
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Late return from leave without prior intimation is subject to disciplinary action
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-hostel-secondary mb-4">Attendance Requirements</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Minimum 75% attendance required for hostel continuation
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Daily attendance will be taken during evening roll call
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Proxy attendance is strictly prohibited
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Frequent absenteeism will result in parental notification
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Weekend outings require proper sign-out procedures
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Disciplinary Actions */}
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
              <CardTitle className="text-2xl font-playfair text-center">Disciplinary Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <p className="text-gray-700 text-lg">
                  Violation of hostel rules will result in appropriate disciplinary action based on the severity of the offense.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-yellow-200 bg-yellow-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-yellow-800">Minor Violations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-yellow-700 space-y-2">
                      <li>• Verbal warning</li>
                      <li>• Written notice</li>
                      <li>• Community service</li>
                      <li>• Restriction of privileges</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-orange-800">Major Violations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-orange-700 space-y-2">
                      <li>• Final written warning</li>
                      <li>• Parental conference</li>
                      <li>• Suspension from hostel</li>
                      <li>• Fine imposition</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-red-800">Serious Violations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-red-700 space-y-2">
                      <li>• Immediate expulsion</li>
                      <li>• Police notification</li>
                      <li>• College disciplinary action</li>
                      <li>• Permanent ban from hostel</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Rules;
