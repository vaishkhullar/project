import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // const [user, setUser] = useState({})
  return (
    <UserContext.Provider value={"tickle122"}>{children}</UserContext.Provider>
  );
};
