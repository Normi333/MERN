import { User } from "./pages/User";
import { Pokemon } from "./pages/Pokemon";
import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function UseUser(){
  return useContext(UserContext);
}
function App() {
  const [user, setUser] = useState({name:"user", role:["admin"]})
  return (
    <>
    {/* <Counter /> */}
    <UserContext.Provider value={user}>
    <User />
    <Pokemon />
    </UserContext.Provider>
    </>
  );
}

export default App;

//https://jsonplaceholder.typicode.com/posts
