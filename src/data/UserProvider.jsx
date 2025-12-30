import { createContext, useState } from "react";

export const UserContext = createContext(null);

// UserContext
// Works like redux store

export function UserProvider({ children }) {
  const [data, setData] = useState(null);

  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
