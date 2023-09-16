import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider, Outlet, } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import MyNavbar from "./components/MyNavbar";
import ErrorPage from "./views/ErrorPage";
import Countries from "./views/Countries";
import Details from "./views/Details";
import { useEffect } from "react";
import Footer from "./components/Footer";
function App() {
  

  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path="/" element={<Root/>} errorElement={<ErrorPage/>} >
        <Route index path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="countries" element={<Countries />} />
        <Route path="countries/:name" element={<Details/>}/>
      </Route>
    )
  );
  
  return (
    <>
      <RouterProvider router={router} />
      <Outlet/>
    </>
  );
}

const Root = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
      <Footer/>
    </>
  )
}
export default App
