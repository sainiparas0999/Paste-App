 import React from "react"
import {  createBrowserRouter ,RouterProvider} from "react-router-dom";
import Home from "./components/Home"
import Pastes from "./components/Pastes";
import Navbar from "./components/Navbar";
import ViewPastes from "./components/ViewPastes";
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="w-full h-full flex flex-col">
        <Navbar/>
        <Home/>
      </div>
    } ,
    
    {
      path:"/pastes",
      element:
      <div>
        <Navbar/>
        <Pastes/>
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar/>
        <ViewPastes/>
      </div>
    }
  ]
)
function App() {
  return (
    <RouterProvider router = {router} />
  )
}

export default App
