
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Calendar, FileText, Send } from 'lucide-react';

const LeaveApplication = () => {
  const [formData, setFormData] = useState({
    leaveType: '',
    fromDate: '',
    toDate: '',
    reason: '',
    contactNumber: '',
    emergencyContact: '',
    destination: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Application Submitted",
        description: "Your leave application has been submitted successfully and is pending approval.",
      });
      setIsSubmitting(false);
      // Reset form
      setFormData({
        leaveType: '',
        fromDate: '',
        toDate: '',
        reason: '',
        contactNumber: '',
        emergencyContact: '',
        destination: ''
      });
    }, 2000);
  };

  return (
    <Layout>
      <div className="py-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2 font-playfair">Leave Application</h1>
            <p className="text-gray-600 text-lg">Submit your leave request for approval</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Leave Application Form
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="leaveType">Leave Type</Label>
                        <Select value={formData.leaveType} onValueChange={(value) => handleInputChange('leaveType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select leave type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="casual">Casual Leave</SelectItem>
                            <SelectItem value="medical">Medical Leave</SelectItem>
                            <SelectItem value="emergency">Emergency Leave</SelectItem>
                            <SelectItem value="home">Home Visit</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="destination">Destination</Label>
                        <Input
                          id="destination"
                          placeholder="Where are you going?"
                          value={formData.destination}
                          onChange={(e) => handleInputChange('destination', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fromDate">From Date</Label>
                        <Input
                          id="fromDate"
                          type="date"
                          value={formData.fromDate}
                          onChange={(e) => handleInputChange('fromDate', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="toDate">To Date</Label>
                        <Input
                          id="toDate"
                          type="date"
                          value={formData.toDate}
                          onChange={(e) => handleInputChange('toDate', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reason">Reason for Leave</Label>
                      <Textarea
                        id="reason"
                        placeholder="Please provide detailed reason for your leave..."
                        value={formData.reason}
                        onChange={(e) => handleInputChange('reason', e.target.value)}
                        rows={4}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contactNumber">Contact Number During Leave</Label>
                        <Input
                          id="contactNumber"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.contactNumber}
                          onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact">Emergency Contact</Label>
                        <Input
                          id="emergencyContact"
                          type="tel"
                          placeholder="+91 98765 43211"
                          value={formData.emergencyContact}
                          onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Submit Application
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Guidelines */}
            <div className="lg:col-span-1">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Application Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Important Notes:</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Submit applications at least 24 hours in advance</li>
                      <li>• Medical leaves require supporting documents</li>
                      <li>• Emergency leaves need immediate notification</li>
                      <li>• Maximum 7 days for casual leave per month</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Required Documents:</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Medical certificate (for medical leave)</li>
                      <li>• Parent consent letter (for overnight stays)</li>
                      <li>• Travel tickets (for long distance travel)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Processing Time:</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Casual Leave: 24 hours</li>
                      <li>• Medical Leave: 12 hours</li>
                      <li>• Emergency Leave: Immediate</li>
                    </ul>
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

export default LeaveApplication;
