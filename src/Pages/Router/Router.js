import Main from "../../Layouts/Main/Main";
import Signup from "../../Signup/Signup";
import Home from "../Home/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            }

        ]
    }
]); 