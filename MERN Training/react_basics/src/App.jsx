import { createContext, useState, useContext } from "react";
import Counter from "./Counter";

const UserContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  return useContext(UserContext);
}

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({ name: "Admin", role: ["admin"] });
  return (
    <>
      <UserContext.Provider value={user}>
        {/* <Users />
        <Pokemon /> */}
        <Counter />
      </UserContext.Provider>
    </>
  );
}




export default App;