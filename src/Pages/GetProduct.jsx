import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAllProducts, getCategory } from "../api";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/react";
import Login from "./Login";

function GetProduct() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  function handleViewProduct(id) {
    if (!isSignedIn) {
      return navigate("/login");
    } else {
      navigate(`/Viewproduct/${id}`);
    }
  }

  function handleCategory(categoryName) {
    const filter = products.filter((ele) => ele.category == categoryName);
    setFilteredProducts(filter);
  }
  function handleAll() {
    setFilteredProducts(products);
  }
  useEffect(() => {
    async function fetchData() {
      const res = await getAllProducts();
      setProducts(res.response);
      setFilteredProducts(res.response);
      console.log(res);
    }

    async function fetchCategory() {
      const res = await getCategory();
      setCategories(res.response);
      console.log(res.response);
    }
    fetchData();
    fetchCategory();
  }, []);
  return (
    <div>
      <div className="mt-5 justify-content-center d-flex gap-5 mb-2">
        <button
          className="btn btn-secondary fw-bold px-4 fs-5"
          onClick={handleAll}
        >
          All
        </button>
        {categories?.map((c, index) => (
          <button
            key={index}
            className="btn btn-secondary fw-bold px-4 fs-5"
            onClick={() => handleCategory(c.name)}
          >
            {c.name}
          </button>
        ))}
        {/* <button className="btn btn-secondary fw-bold px-4 fs-5">Food</button>
        <button className="btn btn-secondary fw-bold px-4 fs-5">Fashion</button>
         <button className="btn btn-secondary fw-bold px-4 fs-5">Cosmetics</button>
         <button className="btn btn-secondary fw-bold px-4 fs-5">Electronics</button>
         <button className="btn btn-secondary fw-bold px-4 fs-5">Grocery</button>
          */}
      </div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around">
          {/* {products.length > 0 &&
            products.map((ele, index) => { */}
          {filteredProducts.length > 0 ? (
            filteredProducts.map((ele, index) => {
              return (
                <div className="col-3 my-3" key={index}>
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      height: "400px",
                    }}
                  >
                    <img
                      src={ele.image}
                      className="card-img-top "
                      alt="..."
                      style={{ height: "50%" }}
                    />
                    <div className="card-body">
                      <h4 className="card-title mt-2">{ele.title}</h4>
                      <h5 className="card-title text-success">
                        Rs.{ele.price}
                      </h5>
                      <p className="card-title">
                        Avaliable stock: <b>{ele.stock}</b>
                      </p>

                      <button
                        className="btn btn-primary mt-4"
                        onClick={() => {
                          handleViewProduct(ele.id);
                        }}
                      >
                        View Product
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h3 className="text-center mt-5 text-danger">No Products Found</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default GetProduct;
