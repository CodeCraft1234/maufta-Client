import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Root from "./Root";
import Home from "./Home/Home";
import AuthProvider from "./Authentication/AuthProvider";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import Profile from "./Pages/Profile/Profile";
import DashboardRoot from "./Pages/Dashboard/DashboardRoot";
import AddProduct from "./Pages/Dashboard/AdminDashboard/AdminPages/AddProduct";
import AllUsers from "./Pages/Dashboard/AdminDashboard/AdminPages/AllUsers";
import AllProducts from "./Pages/Dashboard/AdminDashboard/AdminPages/AllProducts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddBlogs from "./Pages/Dashboard/AdminDashboard/AdminPages/AddBlogs";
import ManageBlogs from "./Pages/Dashboard/AdminDashboard/AdminPages/ManageBlogs";
import AdminHome from "./Pages/Dashboard/AdminDashboard/AdminPages/AdminHome";
import UpdateBlogs from "./Pages/Dashboard/AdminDashboard/AdminPages/UpdateBlogs";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import MyCart from "./Pages/MyCart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/products',
        element:<Products></Products>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      },
      {
        path:'/productDetails/:id',
        element:<ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`https://travel-server-azure.vercel.app/productDetails/${params.id}`)
      },
      {
        path:'/myCart',
        element:<MyCart></MyCart>
      },
      {
        path:'/dashboard',
        element:<DashboardRoot></DashboardRoot>,
        children:[
          {
            path:'/dashboard/admin/addProduct',
            element:<AddProduct></AddProduct>
          },
          {
            path:'/dashboard/admin/allProducts',
            element:<AllProducts></AllProducts>
          },
          {
            path:'/dashboard/admin/allUsers',
            element:<AllUsers></AllUsers>
          },
          {
            path:'/dashboard/admin/addBlogs',
            element:<AddBlogs></AddBlogs>
          },
          {
            path:'/dashboard/admin/manageBlogs',
            element:<ManageBlogs></ManageBlogs>
          },
          {
            path:'/dashboard/admin/adminHome',
            element:<AdminHome></AdminHome>
          },
          {
            path:'/dashboard/admin/updateBlogs/:id',
            element:<UpdateBlogs></UpdateBlogs>,
            loader: ({ params }) => fetch(`https://travel-server-azure.vercel.app/blogs/${params.id}`)
          },
        ]
      },
    ]
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);