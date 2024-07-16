import React, { createContext, useState } from "react";

export const AppContext = createContext();

// Create the provider component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
