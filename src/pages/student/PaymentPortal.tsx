
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, History, CheckCircle, AlertTriangle } from 'lucide-react';

const PaymentPortal = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const currentFees = {
    messFeeDue: 7000,
    dueDate: "2024-01-15",
    month: "January 2024"
  };

  const paymentHistory = [
    {
      id: 1,
      type: "Mess Fee",
      amount: 7000,
      date: "2023-12-10",
      status: "completed",
      transactionId: "TXN123456789",
      month: "December 2023"
    },
    {
      id: 2,
      type: "Hostel Fee",
      amount: 41000,
      date: "2023-07-15",
      status: "completed",
      transactionId: "TXN123456788",
      month: "Annual 2023-24"
    },
    {
      id: 3,
      type: "Mess Fee",
      amount: 7000,
      date: "2023-11-08",
      status: "completed",
      transactionId: "TXN123456787",
      month: "November 2023"
    }
  ];

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful",
        description: `Mess fee of ₹${currentFees.messFeeDue} paid successfully for ${currentFees.month}`,
      });
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="py-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2 font-playfair">Payment Portal</h1>
            <p className="text-gray-600 text-lg">Manage your hostel and mess fee payments</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Current Dues */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-lg border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="font-playfair flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    Current Dues
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                      <div>
                        <h3 className="font-semibold text-red-800">Mess Fee - {currentFees.month}</h3>
                        <p className="text-sm text-red-600">Due date: {new Date(currentFees.dueDate).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">₹{currentFees.messFeeDue.toLocaleString()}</div>
                        <Badge variant="destructive">Overdue</Badge>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handlePayment}
                      disabled={isProcessing}
                      size="lg"
                      className="w-full"
                    >
                      {isProcessing ? (
                        "Processing Payment..."
                      ) : (
                        <>
                          <CreditCard className="w-4 h-4 mr-2" />
                          Pay ₹{currentFees.messFeeDue.toLocaleString()}
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Payment History */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair flex items-center gap-2">
                    <History className="w-5 h-5" />
                    Payment History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {paymentHistory.map((payment) => (
                      <div key={payment.id} className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <div>
                            <h3 className="font-semibold text-green-800">{payment.type}</h3>
                            <p className="text-sm text-green-600">{payment.month}</p>
                            <p className="text-xs text-gray-500">TXN: {payment.transactionId}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">₹{payment.amount.toLocaleString()}</div>
                          <p className="text-sm text-green-600">{new Date(payment.date).toLocaleDateString()}</p>
                          <Badge className="bg-green-500">Completed</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair">Payment Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 border rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">Online Payment</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Credit/Debit Cards</li>
                      <li>• Net Banking</li>
                      <li>• UPI</li>
                      <li>• Digital Wallets</li>
                    </ul>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">Offline Payment</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cash at Office</li>
                      <li>• Demand Draft</li>
                      <li>• Bank Transfer</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair">Fee Structure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Mess Fee</span>
                      <span className="font-semibold">₹7,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Hostel Fee</span>
                      <span className="font-semibold">₹41,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Security Deposit</span>
                      <span className="font-semibold">₹5,000</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold">
                      <span>Late Fee (per day)</span>
                      <span className="text-red-600">₹100</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair">Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <p><strong>Payment Issues:</strong></p>
                    <p>Contact: +91 431 270 1501</p>
                    <p>Email: accounts@sjctrichy.edu.in</p>
                    <p><strong>Office Hours:</strong></p>
                    <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                    <p>Sat: 9:00 AM - 1:00 PM</p>
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

export default PaymentPortal;
