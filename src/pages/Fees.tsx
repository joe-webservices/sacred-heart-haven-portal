
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Fees = () => {
  return (
    <Layout>
      <div className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-6 font-playfair">Fee Structure</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive breakdown of hostel and mess fees along with payment policies 
              for the academic year 2024-25.
            </p>
          </div>

          {/* Academic Year Info */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              Academic Year 2024-25
            </Badge>
          </div>

          {/* Hostel Fees */}
          <div className="mb-12">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-primary text-white">
                <CardTitle className="text-3xl font-playfair text-center">Hostel Fees</CardTitle>
                <p className="text-center text-blue-100 text-lg">Annual accommodation charges</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-4 px-4 font-bold text-gray-800">Fee Type</th>
                        <th className="text-right py-4 px-4 font-bold text-gray-800">Amount (₹)</th>
                        <th className="text-center py-4 px-4 font-bold text-gray-800">Payment Schedule</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-semibold">Accommodation Fee</p>
                            <p className="text-sm text-gray-600">Room rent and basic facilities</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right font-bold text-primary">₹ 25,000</td>
                        <td className="py-4 px-4 text-center">
                          <Badge variant="outline">Annual</Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-semibold">Security Deposit</p>
                            <p className="text-sm text-gray-600">Refundable on checkout</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right font-bold text-primary">₹ 5,000</td>
                        <td className="py-4 px-4 text-center">
                          <Badge variant="outline">One-time</Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-semibold">Maintenance Fee</p>
                            <p className="text-sm text-gray-600">Utilities and upkeep</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right font-bold text-primary">₹ 8,000</td>
                        <td className="py-4 px-4 text-center">
                          <Badge variant="outline">Annual</Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-semibold">Development Fee</p>
                            <p className="text-sm text-gray-600">Infrastructure improvements</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right font-bold text-primary">₹ 3,000</td>
                        <td className="py-4 px-4 text-center">
                          <Badge variant="outline">Annual</Badge>
                        </td>
                      </tr>
                      <tr className="bg-blue-50 border-t-2 border-primary">
                        <td className="py-4 px-4 font-bold text-lg">Total Hostel Fee</td>
                        <td className="py-4 px-4 text-right font-bold text-2xl text-primary">₹ 41,000</td>
                        <td className="py-4 px-4 text-center">
                          <Badge className="bg-primary">Per Year</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mess Fees */}
          <div className="mb-12">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-secondary text-white">
                <CardTitle className="text-3xl font-playfair text-center">Mess Fees</CardTitle>
                <p className="text-center text-amber-100 text-lg">Monthly food and dining charges</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-hostel-secondary mb-4">Regular Mess Plan</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                        <span className="font-medium">Breakfast</span>
                        <span className="font-bold text-hostel-secondary">₹ 1,500/month</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                        <span className="font-medium">Lunch</span>
                        <span className="font-bold text-hostel-secondary">₹ 2,500/month</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                        <span className="font-medium">Evening Snacks</span>
                        <span className="font-bold text-hostel-secondary">₹ 800/month</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                        <span className="font-medium">Dinner</span>
                        <span className="font-bold text-hostel-secondary">₹ 2,200/month</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-amber-100 rounded-lg border-2 border-amber-300">
                        <span className="font-bold text-lg">Total Monthly</span>
                        <span className="font-bold text-xl text-hostel-secondary">₹ 7,000</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-hostel-secondary mb-4">Special Options</h3>
                    <div className="space-y-4">
                      <Card className="border-amber-200">
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-2">Vegetarian Only</h4>
                          <p className="text-sm text-gray-600 mb-2">Pure vegetarian meals</p>
                          <p className="font-bold text-hostel-secondary">₹ 6,500/month</p>
                        </CardContent>
                      </Card>
                      <Card className="border-amber-200">
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-2">Non-Vegetarian</h4>
                          <p className="text-sm text-gray-600 mb-2">Includes chicken/mutton (4 days/week)</p>
                          <p className="font-bold text-hostel-secondary">₹ 7,500/month</p>
                        </CardContent>
                      </Card>
                      <Card className="border-amber-200">
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-2">Guest Meal</h4>
                          <p className="text-sm text-gray-600 mb-2">Per meal for visitors</p>
                          <p className="font-bold text-hostel-secondary">₹ 150/meal</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Policies */}
          <div className="mb-12">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-primary text-white">
                <CardTitle className="text-3xl font-playfair text-center">Payment Policies</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Payment Schedule</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Hostel fees:</strong> To be paid annually at the time of admission</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Mess fees:</strong> To be paid monthly before the 15th of each month</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Late payment:</strong> ₹100 fine per day after due date</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Advance payment:</strong> 5% discount on annual mess fee payment</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Payment Methods</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Online payment:</strong> Available through student portal</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Bank transfer:</strong> Direct transfer to hostel account</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Demand draft:</strong> Payable to "Sacred Heart Hostel"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Cash payment:</strong> At hostel office during business hours</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="text-xl font-playfair">Refund Policy</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Security deposit fully refundable on checkout (minus damages)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Hostel fees: 50% refundable if vacated before 6 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Mess fees: Pro-rated based on actual days stayed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Refund processing: 15-30 working days</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="text-xl font-playfair">Financial Assistance</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Merit scholarships available for toppers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Need-based fee concessions for economically weak students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Installment payment options for mess fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Work-study programs available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact & Payment Portal */}
          <div className="text-center">
            <Card className="shadow-xl bg-gradient-to-br from-primary to-blue-800 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 font-playfair">Ready to Make Payment?</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Access our secure online payment portal or contact the hostel office for assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/student/login">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      Online Payment Portal
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary">
                    Contact Office: +91 431 270 1501
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Fees;
