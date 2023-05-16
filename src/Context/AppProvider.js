import React, { createContext, useContext, useEffect, useState } from "react";
import { data } from "../Data/data";
import { teacher } from "../Data/teacher";

// step 1: create context

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // step 2: create provider

  const [user, setUser] = useState(data);
  const [teach, setTeach] = useState(teacher);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetch(
          "https://6410036d864814e5b644b72c.mockapi.io/users",
          { method: "GET" }
        );
        const data = await response.json();
      } catch {}
    };
  });

  return (
    <AppContext.Provider value={{ user, setUser, teach, setTeach }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const AppState = () => {
  return useContext(AppProvider);
};
