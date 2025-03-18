import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./Layout/RootLayout"


function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element: <RootLayout/>
    }
  ])

  return (
    <>
   <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
