
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <Layout>
      <div className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-6 font-playfair">About Sacred Heart Hostel</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established as part of the prestigious St. Joseph's College, Trichy, Sacred Heart Hostel has been providing 
              exceptional residential facilities for students for over five decades.
            </p>
          </div>

          {/* History Section */}
          <div className="mb-16">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-primary text-white">
                <CardTitle className="text-3xl font-playfair text-center">Our Heritage</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="prose max-w-none text-gray-700">
                  <p className="text-lg mb-6">
                    Sacred Heart Hostel was established in 1973 as part of St. Joseph's College, Trichy, one of Tamil Nadu's 
                    most respected educational institutions. Named after the Sacred Heart of Jesus, the hostel embodies the 
                    Jesuit tradition of excellence in education and holistic development of students.
                  </p>
                  <p className="text-lg mb-6">
                    Over the decades, our hostel has been home to thousands of students who have gone on to become leaders 
                    in various fields - from academia and research to business and public service. The hostel has continuously 
                    evolved to meet the changing needs of students while maintaining its core values of discipline, 
                    community living, and academic excellence.
                  </p>
                  <p className="text-lg">
                    Today, Sacred Heart Hostel stands as a testament to the enduring legacy of Jesuit education, providing 
                    a nurturing environment where students not only pursue their academic goals but also develop into 
                    well-rounded individuals prepared for the challenges of modern life.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-secondary text-white">
                <CardTitle className="text-2xl font-playfair text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  To provide a safe, supportive, and conducive residential environment that fosters academic excellence, 
                  personal growth, and character development. We strive to create a home away from home where students 
                  can thrive academically while developing strong moral values and life skills essential for their future success.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-primary text-white">
                <CardTitle className="text-2xl font-playfair text-center">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be recognized as a premier residential facility that exemplifies the Jesuit ideals of educational 
                  excellence, serving others, and developing men and women for others. We envision creating global citizens 
                  who are academically competent, morally upright, and socially responsible.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Administration */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary text-center mb-12 font-playfair">Administration</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-white">RW</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Rev. Fr. Rector</h3>
                  <Badge variant="secondary" className="mb-4">Rector</Badge>
                  <p className="text-gray-600">
                    Overall supervision and guidance of hostel administration
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-white">HW</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hostel Warden</h3>
                  <Badge variant="secondary" className="mb-4">Head Administrator</Badge>
                  <p className="text-gray-600">
                    Day-to-day operations and student welfare management
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-white">AD</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Assistant Directors</h3>
                  <Badge variant="secondary" className="mb-4">Student Mentors</Badge>
                  <p className="text-gray-600">
                    Direct student interaction and academic support
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Facilities Overview */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary text-center mb-12 font-playfair">Facilities & Amenities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Accommodation", desc: "Well-furnished rooms with study spaces" },
                { title: "Dining", desc: "Nutritious meals in spacious mess hall" },
                { title: "Recreation", desc: "Indoor and outdoor sports facilities" },
                { title: "Study Areas", desc: "Quiet zones for focused learning" },
                { title: "Wi-Fi", desc: "High-speed internet throughout hostel" },
                { title: "Security", desc: "24/7 security and CCTV monitoring" },
                { title: "Medical", desc: "First aid and medical assistance" },
                { title: "Laundry", desc: "Convenient laundry services" }
              ].map((facility, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-primary mb-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm">{facility.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values & Culture */}
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-primary text-white">
              <CardTitle className="text-3xl font-playfair text-center">Our Values & Culture</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Core Values</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Excellence:</strong> Striving for the highest standards in all endeavors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Integrity:</strong> Upholding honesty and strong moral principles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Service:</strong> Developing a spirit of service to others</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Community:</strong> Building strong bonds and mutual support</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Cultural Environment</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Multicultural and inclusive community</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Regular cultural and educational programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Peer learning and mentorship opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Balance between discipline and freedom</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
