import './App.css'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Contact from './Components/Contact/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'

let routers = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {path:'Start-Framework/',element:<Home/>},
    {path:'Start-Framework/about',element:<About/>},
    {path:'Start-Framework/portfolio',element:<Portfolio/>},
    {path:'Start-Framework/contact',element:<Contact/>},
  ]}
])


function App() {


  return (
    <>
    <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
