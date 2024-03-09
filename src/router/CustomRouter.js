import Home from "../pages/Dashboard/Home";
import About from "../pages/Dashboard/About";
import Contact from "../pages/Dashboard/Contact";
import Blog from "../pages/Dashboard/Blog";
import Users from "../pages/Dashboard/Users";
import UserDetail from "../pages/Dashboard/UserDetail";
import Login from "../pages/Auth/Login";
import Signin from "../pages/Auth/Signin";

export const DashboardRouter = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "about",
        element: <About />
    },
    {
        path: "contact",
        element: <Contact />
    },
    {
        path: "blog",
        element: <Blog />
    },
    {
        path: "users",
        element: <Users />
    },
    {
        path: "users/:id",
        element: <UserDetail />
    }
]

export const AuthRouter = [
    {
        path: "auth",
        element: <Login />
    },
    {
        path: "auth/login",
        element: <Login/>
    },
    {
        path: "auth/signin",
        element: <Signin />
    },
]