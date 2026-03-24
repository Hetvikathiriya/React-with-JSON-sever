import React, { useState } from "react";
import Form from "./Pages/form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetProduct from "./Pages/getProduct";
import ViewProduct from "./Pages/ViewProduct";
import Navbar from "./Pages/Navbar";
import { useUser } from "@clerk/react";
import Login from "./Pages/Login";
import Auth from "./Pages/Auth";
import CartProduct from "./Pages/CartProduct";
import AddCategory from "./Pages/AddCategory";
import Home from "./Pages/Home";

function App() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <p>Loding....</p>;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getproduct" element={<GetProduct />} />
          <Route
            path="/form"
            element={
              <Auth>
                {" "}
                <Form />{" "}
              </Auth>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/Viewproduct/:id" element={<ViewProduct />} />
          <Route
            path="/cartproduct"
            element={
              <Auth>
                {" "}
                <CartProduct />{" "}
              </Auth>
            }
          />
          <Route
            path="/addcategory"
            element={
              <Auth>
                {" "}
                <AddCategory />{" "}
              </Auth>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
