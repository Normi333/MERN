import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import NavBar from "./components/NavBar";
import { useState, createContext, useEffect, useContext } from "react";

const queryClient = new QueryClient();

const AuthUserContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthUser = ()=>{
  return useContext(AuthUserContext);
}


const getUserFromLocalStorage = () => {
  const authUser = localStorage.getItem("authUser");
  return JSON.parse(authUser) ?? [];
};

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

function App() {
  const [authUser, setAuthUser] = useState(getUserFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("authUser", JSON.stringify(authUser));
  }, [authUser]);

  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<HomeLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
            </Route>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthUserContext.Provider>
  );
}

export default App;

// products pagination, filtering, search, api pagination
// sign in sign up if authenticate redirect /