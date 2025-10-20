import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Dynamic import or code splitting
const Home = React.lazy(() => import("./pages/brandisby/Home"));
const Dashboard = React.lazy(() => import("./pages/brandisby/Dashboard"));
const TenantDashboard = React.lazy(
  () => import("./pages/dynamic/TenantDashboard")
);

const Onboarding = React.lazy(() => import("./pages/brandisby/Onboarding"));

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
const Checkout = React.lazy(() => import("./pages/dynamic/Checkout"));

const ProductDetails = React.lazy(
  () => import("./pages/dynamic/ProductDetails")
);

const DynamicNotFound = React.lazy(
  () => import("./pages/dynamic/DynamicNotFound")
);
const NotFound = React.lazy(() => import("./pages/brandisby/NotFound"));

const App = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <ToastContainer />

      <Routes>
        {/* Brandisby Layout */}
        <Route path="/" element={<BrandisbyLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<SignIn />} />
          <Route path="register" element={<SignUp />} />
          <Route path="tenant-onboarding" element={<Onboarding />} />
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
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="dashboard" element={<TenantDashboard />} />

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
    </div>
  );
};

export default App;
