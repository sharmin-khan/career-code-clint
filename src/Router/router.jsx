import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index:true,
            Component: Home
        },
        {
         path:'/jobs/:id',
         Component:JobDetails,
         loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path: 'register',
            Component: Register,
        },
        {
          path: 'signin',
          Component: SignIn
        }
    ]

  },
]);

export default router;