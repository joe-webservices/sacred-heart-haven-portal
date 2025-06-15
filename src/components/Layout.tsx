
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, showHeader = true }) => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-hostel-primary via-blue-100 to-hostel-secondary transition-colors">
      {showHeader && (
        <header className="bg-white shadow-lg border-b-4 border-primary">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SH</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-primary font-playfair">Sacred Heart Hostel</h1>
                  <p className="text-sm text-gray-600">St. Joseph's College, Trichy</p>
                </div>
              </Link>
              
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">About</Link>
                <Link to="/gallery" className="text-gray-700 hover:text-primary transition-colors">Gallery</Link>
                <Link to="/rules" className="text-gray-700 hover:text-primary transition-colors">Rules</Link>
                <Link to="/fees" className="text-gray-700 hover:text-primary transition-colors">Fees</Link>
                
                {isAuthenticated ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700">Welcome, {user?.name}</span>
                    <Button onClick={logout} variant="outline" size="sm">
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Link to="/student/login">
                      <Button variant="outline" size="sm">Student Login</Button>
                    </Link>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </header>
      )}

      <main>
        {children}
      </main>
      
      <footer className="bg-primary text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 font-playfair">Sacred Heart Hostel</h3>
            <p className="text-blue-200">St. Joseph's College, Trichy</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Contact Info</h4>
              <p className="text-blue-200">Phone: +91 431 270 1501</p>
              <p className="text-blue-200">Email: sacredheart@sjctrichy.edu.in</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Address</h4>
              <p className="text-blue-200">
                St. Joseph's College Campus<br />
                Trichy - 620 002<br />
                Tamil Nadu, India
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-blue-200 hover:text-white transition-colors">About Us</Link>
                <Link to="/rules" className="block text-blue-200 hover:text-white transition-colors">Rules & Regulations</Link>
                <Link to="/fees" className="block text-blue-200 hover:text-white transition-colors">Fee Structure</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8">
            <p className="text-blue-200">
              © 2024 Sacred Heart Hostel, St. Joseph's College, Trichy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
