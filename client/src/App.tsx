import React from "react";
import { Route, Routes } from "react-router-dom";

// Dynamic import or code splitting
const Home = React.lazy(() => import("./pages/brandisby/Home"));
const Dashboard = React.lazy(() => import("./pages/brandisby/Dashboard"));
const BrandisbyLayout = React.lazy(() => import("./layouts/BrandisbyLayout"));
const DynamicLayout = React.lazy(() => import("./layouts/DynamicLayout"));
const TenantLayout = React.lazy(() => import("./layouts/TenantLayout"));
const DynamicHome = React.lazy(() => import("./pages/dynamic/DynamicHome"));

const Register = React.lazy(() => import("./pages/dynamic/Register"));
const Login = React.lazy(() => import("./pages/dynamic/Login"));
const SignIn = React.lazy(() => import("./pages/brandisby/SignIn"));
const SignUp = React.lazy(() => import("./pages/brandisby/SignUp"));
const Products = React.lazy(() => import("./pages/dynamic/Products"));
const Cart = React.lazy(() => import("./pages/dynamic/Cart"));
const Order = React.lazy(() => import("./pages/dynamic/Order"));

const ProductDetails = React.lazy(
  () => import("./pages/dynamic/ProductDetails")
);

const DynamicNotFound = React.lazy(
  () => import("./pages/dynamic/DynamicNotFound")
);
const NotFound = React.lazy(() => import("./pages/brandisby/NotFound"));

const App = () => {
  return (
    <Routes>
      {/* Brandisby Layout */}
      <Route path="/" element={<BrandisbyLayout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
      </Route>

      {/* Dynamic layout */}
      <Route path="/:tenant/*" element={<DynamicLayout />}>
        {/* Landing page with its own navbar and footer */}
        <Route index element={<DynamicHome />} />

        {/* Shared layout for other tenant pages */}
        <Route element={<TenantLayout />}>
          <Route path="sign-up" element={<Register />} />
          <Route path="sign-in" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="product/cart" element={<Cart />} />
          <Route path="product/checkout" element={<Order />} />

          <Route
            path="product-details/:productId"
            element={<ProductDetails />}
          />
          {/* Add more tenant-specific routes here */}
        </Route>

        {/* Catch-all for unknown tenant routes */}
        <Route path="*" element={<DynamicNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
