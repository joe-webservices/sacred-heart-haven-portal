
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'ad' | 'office';
  rollNo?: string;
  roomNo?: string;
  department?: string;
  year?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'student' | 'ad' | 'office') => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('sacredHeartUser');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string, role: 'student' | 'ad' | 'office'): Promise<boolean> => {
    // Mock authentication - replace with actual API call later
    const mockUsers = {
      student: {
        email: 'student@sjctrichy.edu.in',
        password: 'student123',
        userData: {
          id: '1',
          name: 'John Doe',
          email: 'student@sjctrichy.edu.in',
          role: 'student' as const,
          rollNo: 'SJC21CS001',
          roomNo: 'A-101',
          department: 'Computer Science',
          year: '3rd Year'
        }
      },
      ad: {
        email: 'ad@sjctrichy.edu.in',
        password: 'ad123',
        userData: {
          id: '2',
          name: 'Dr. Mary Assistant Director',
          email: 'ad@sjctrichy.edu.in',
          role: 'ad' as const
        }
      },
      office: {
        email: 'office@sjctrichy.edu.in',
        password: 'office123',
        userData: {
          id: '3',
          name: 'Office Administrator',
          email: 'office@sjctrichy.edu.in',
          role: 'office' as const
        }
      }
    };

    const mockUser = mockUsers[role];
    if (mockUser && email === mockUser.email && password === mockUser.password) {
      setUser(mockUser.userData);
      setIsAuthenticated(true);
      localStorage.setItem('sacredHeartUser', JSON.stringify(mockUser.userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('sacredHeartUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
