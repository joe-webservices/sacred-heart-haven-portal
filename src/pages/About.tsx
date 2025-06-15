import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Image } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Main wrapper with a subtle white-to-slate gradient */}
      <div className="py-16 bg-gradient-to-b from-white via-slate-50 to-slate-200 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header Section with modern gradient text and subtle gradient backdrop */}
          <div className="text-center mb-16 rounded-xl px-2 py-10 bg-gradient-to-br from-white/80 via-blue-50/60 to-slate-100/80 shadow-md">
            <h1 className="text-5xl font-bold gradient-text mb-6 font-playfair">About Sacred Heart Hostel</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established as part of the prestigious St. Joseph's College, Trichy, Sacred Heart Hostel has been providing 
              exceptional residential facilities for students for over five decades.
            </p>
            {/* Gallery shortcut */}
            <div className="mt-4">
              <a href="/gallery" className="inline-flex items-center gap-2 text-primary font-medium underline hover:text-secondary transition-colors">
                <Image className="w-5 h-5" />
                Explore our Gallery
              </a>
            </div>
          </div>

          {/* Faith and Christian Identity Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <Card className="shadow-lg bg-gradient-to-b from-blue-50/80 to-white">
                <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-playfair text-center">Our Christian Heritage</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <img src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=600&q=80" alt="Cathedral Interior" className="rounded-md mb-4 w-full h-40 object-cover" />
                  <p className="text-lg text-gray-700">
                    Sacred Heart Hostel draws its inspiration from the life and teachings of Jesus Christ and the Jesuit tradition of education. Daily life in the hostel is marked by a spirit of faith, compassion, and a commitment to the values of the Gospel.
                  </p>
                  <p className="text-md text-gray-700 mt-4">
                    Regular prayer services, Holy Mass, and celebrations of important Christian feasts nurture the spiritual life of our community. Our chapel serves as a sanctuary for reflection, offering, and unity for students of all backgrounds.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="shadow-lg bg-gradient-to-b from-yellow-50/70 to-white">
                <CardHeader className="bg-gradient-secondary text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-playfair text-center">Spiritual Environment</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Scenic Campus" className="rounded-md mb-4 w-full h-40 object-cover" />
                  <p className="text-lg text-gray-700">
                    The hostel offers a nurturing atmosphere rooted in Christian hospitality, welcoming students of all faiths while upholding strong values of respect and brotherhood.
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700">
                    <li>Morning and evening prayers in chapel</li>
                    <li>Counseling and pastoral care by resident fathers</li>
                    <li>Special retreats and spiritual camps</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Gallery Preview Section with modern gradient cards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold gradient-text text-center mb-10 font-playfair">A Glimpse of Our Environment</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-lg shadow-md h-52 w-full bg-gradient-to-tr from-blue-200 via-white to-yellow-50 flex items-end overflow-hidden">
                <img src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=700&q=80" alt="Institute Building" className="h-full w-full object-cover mix-blend-multiply opacity-80" />
              </div>
              <div className="rounded-lg shadow-md h-52 w-full bg-gradient-to-tr from-amber-100 via-white to-blue-100 flex items-end overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=700&q=80" alt="College Building" className="h-full w-full object-cover mix-blend-multiply opacity-80" />
              </div>
              <div className="rounded-lg shadow-md h-52 w-full bg-gradient-to-tr from-green-100 via-white to-yellow-100 flex items-end overflow-hidden">
                <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=700&q=80" alt="Deer & Nature" className="h-full w-full object-cover mix-blend-multiply opacity-80" />
              </div>
            </div>
          </div>

          {/* History Section with subtle background */}
          <div className="mb-16">
            <Card className="shadow-xl bg-gradient-to-br from-white to-blue-50/70">
              <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
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
            <Card className="shadow-xl bg-gradient-to-tr from-blue-100 via-white to-yellow-50">
              <CardHeader className="bg-gradient-secondary text-white rounded-t-lg">
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

            <Card className="shadow-xl bg-gradient-to-tr from-yellow-100 via-white to-blue-200">
              <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
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

          {/* Administration section with modern backgrounds */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold gradient-text text-center mb-12 font-playfair">Administration</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg bg-gradient-to-b from-blue-100 via-white to-blue-50">
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
              <Card className="text-center shadow-lg bg-gradient-to-b from-yellow-100 via-white to-yellow-50">
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
              <Card className="text-center shadow-lg bg-gradient-to-b from-blue-100 via-white to-orange-50">
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

          {/* Facilities Overview with gradient cards */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold gradient-text text-center mb-12 font-playfair">Facilities & Amenities</h2>
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
                <Card
                  key={index}
                  className={`text-center shadow-lg hover:shadow-xl transition-shadow
                  ${index % 2 === 0
                    ? 'bg-gradient-to-b from-blue-100 via-white to-yellow-50'
                    : 'bg-gradient-to-b from-yellow-100 via-white to-blue-100'}`}
                >
                  <CardContent className="p-6">
                    <h3 className="font-bold text-primary mb-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm">{facility.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values & Culture */}
          <Card className="shadow-xl bg-gradient-to-bl from-white via-blue-100 to-yellow-50">
            <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
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
