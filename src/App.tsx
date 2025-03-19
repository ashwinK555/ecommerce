import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./Layout/RootLayout"
import Home from "./Pages/Home"
import Men from "./Pages/Men"


function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element: <RootLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'men',
          element: <Men/>
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
