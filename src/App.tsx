// import './App.css'
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider, Outlet, } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import MyNavbar from "./components/MyNavbar";
import ErrorPage from "./views/ErrorPage";
import Countries from "./views/Countries";
import Details from "./views/Details";
function App() {
  
  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path="/" element={<Root/>} errorElement={<ErrorPage/>} >
        <Route index path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="countries" element={<Countries />} />
        <Route path="countries/:name" element={<Details/>}/>
        {/* <Route path="*" element={<ErrorPage/>} /> */}
      </Route>
    )
  );
  
  return (
    <>
      {/* <h1>Countries</h1> */}
      <RouterProvider router={router} />
      <Outlet/>
    </>
  );
}

const Root = () => {
  return (
    <>
      <MyNavbar/>
      {/* <h2>This will be displayed in every view/page</h2> */}
      <Outlet/>
    </>
  )
}
export default App
