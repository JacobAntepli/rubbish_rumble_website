import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import NavBar from "./Components/NavBar/NavBar";
import {
  createBrowserRouter, Outlet, RouterProvider,
} from "react-router-dom";
import BlogPostComponent from "./Components/BlogPost/BlogPostComponent";
import Week1Page from "./Components/Week1Page";
function App() {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/rubbish_rumble_website/",
          element: (
              <>
                  <Layout/>
                  <MainPage/>
              </>
          ),

        },
          {
              path: "/rubbish_rumble_website/Week1",
              element: (
                  <>
                      <Layout/>
                      <Week1Page/>




                  </>
              ),

          },




      ],
    },
  ]);


  return (
      <RouterProvider router={router}/>
  );
}

function Layout() {
  return(
      <>
        <NavBar/>
        <Outlet/>
      </>
  );

}
export default App;
