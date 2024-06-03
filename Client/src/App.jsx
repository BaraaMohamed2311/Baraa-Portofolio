import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './pages/Home/Home'
import MainLayout  from './components/mainLayout/mainLayout';
import {useState ,useEffect} from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.jsx";
import {  ScrollPosContextProvider} from "../Context/ScrollPosContext.jsx"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let router = createBrowserRouter([
  {
    path: "/Baraa-Portofolio/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
     
    ],
  },

])

function App() {

  const [loading, setLoading] = useState(true)
    useEffect(() => {
        const Timeout =setTimeout(() => setLoading(false), 0);

        return ()=>{
          clearTimeout(Timeout)
        }
    }, [])
    
    if(loading)
        return <LoadingScreen loading= {loading} />
    

  return (
    <ScrollPosContextProvider>
      <RouterProvider router={router}>
      </RouterProvider>
      <ToastContainer position='bottom-right' style={{
        fontWeight:600
      }}/>
    </ScrollPosContextProvider>
  )
}

export default App
