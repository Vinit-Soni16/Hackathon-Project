import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser ] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for existing authentication on app load
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userData = localStorage.getItem("user");

    if (isLoggedIn === "true" && userData) {
      try {
        const parsedUser  = JSON.parse(userData);
        setUser (parsedUser );
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = (userData) => {
    const newUser  = {
      id: userData.id || Date.now().toString(),
      name: userData.name || "User ",
      email: userData.email || "",
      plan: userData.plan || "Free",
      avatar: userData.avatar || "👤",
      memberSince: userData.memberSince || new Date().toISOString(),
    };

    setUser (newUser );
    setIsAuthenticated(true);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(newUser ));
  };

  const logout = () => {
    setUser (null);
    setIsAuthenticated(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
  };

  const updateUser  = (userData) => {
    if (user) {
      const updatedUser  = { ...user, ...userData };
      setUser (updatedUser );
      localStorage.setItem("user", JSON.stringify(updatedUser ));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        updateUser ,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
