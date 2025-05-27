import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // This is a mock login function. In a real app, you would make an API call
    return new Promise((resolve, reject) => {
      // Mock user data based on email
      let userData;
      if (email.includes('admin')) {
        userData = {
          id: 1,
          name: 'Admin User',
          email: email,
          role: 'admin',
          permissions: ['all']
        };
      } else if (email.includes('teacher')) {
        userData = {
          id: 2,
          name: 'Teacher User',
          email: email,
          role: 'teacher',
          permissions: ['view_students', 'manage_courses', 'take_attendance']
        };
      } else if (email.includes('student')) {
        userData = {
          id: 3,
          name: 'Student User',
          email: email,
          role: 'student',
          permissions: ['view_courses', 'view_results', 'view_attendance']
        };
      } else {
        reject(new Error('Invalid credentials'));
        return;
      }

      // Simulate API delay
      setTimeout(() => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        resolve(userData);
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const hasPermission = (permission) => {
    if (!user) return false;
    if (user.permissions.includes('all')) return true;
    return user.permissions.includes(permission);
  };

  const value = {
    user,
    loading,
    login,
    logout,
    hasPermission
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 