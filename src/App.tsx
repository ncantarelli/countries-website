import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider, Outlet, ScrollRestoration} from "react-router-dom";
import "./style/styles.css"
import Home from "./views/Home";
import About from "./views/About";
import ErrorPage from "./views/ErrorPage";
import Countries from "./views/Countries";
import Registration from "./views/Registration";
import Login from "./views/Login";
import CountryDetails from "./views/CountryDetails";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import UserPage from "./views/UserPage";
import Favorites from "./views/Favorites";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
// import { CountriesContextProvider } from "./context/CountriesContext";

function App() {  

  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="countries" element={<Countries />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="country/:name" element={<CountryDetails />} />
        <Route path="userpage" element={
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
          } />
        <Route path="userpage/favorites" element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>} />
      </Route>
    )
  );

  return (
    <>
      <AuthContextProvider>
        {/* <CountriesContextProvider> */}
        <RouterProvider router={router} />
        {/* </CountriesContextProvider> */}
      </AuthContextProvider>
    </>
  );
};

const Root = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default App
