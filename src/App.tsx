import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./Layout/RootLayout"
import Home from "./Pages/Home"


function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element: <RootLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }
      ]
      
    }

  ])

  return (
    <>
   <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
