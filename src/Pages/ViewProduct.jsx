import React, { useState, useEffect } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import {
  getCartProduct,
  getOneProduct,
  postCartProduct,
  updateCart,
} from "../api";
import axios from "axios";
import { useUser } from "@clerk/react";

function ViewProduct() {
  const [product, setProduct] = useState({});
  const { user } = useUser();
  const { id } = useParams();
  const navigate = useNavigate();

  // function handleCart() {
  //   console.log(user);
  //   console.log({
  //     email: user.emailAddresses[0].emailAddress,
  //     productId: product.id,
  //     quantity: 1,
  //   });
  // }
  async function handleCart() {
    const cartData = await getCartProduct();

    const cartItem = cartData.response.find((item) => {
      return (
        item.email === user.emailAddresses[0].emailAddress &&
        item.productId == id
      );

    });

    if (cartItem) {
      cartItem.quantity += 1;
      await updateCart(cartItem.id, cartItem);
    } else {
      await postCartProduct({
        email: user.emailAddresses[0].emailAddress,
        productId: product.id,
        quantity: 1,
      });

    }
      navigate("/cartproduct")

  }

  useEffect(() => {
    async function fetchData() {
      const res = await getOneProduct(id);
      setProduct(res.response);
    }

    fetchData();
  }, []);
  return (
    <div>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-6">
            <img
              className="rounded-3"
              src={product?.image}
              alt=""
              width={"80%"}
            />
          </div>
          <div className="col-6 mt-5">
            <h2>{product?.title} </h2>
            <p className="fs-4 text-success fw-medium">Rs.{product?.price}</p>
            <p className="fs-5 fw-medium">
              Avaliability In Stock: {product?.stock}{" "}
            </p>
             <p className="fs-5 fw-medium">
                        Category: {product.category}
                      </p>
            <p className="fs-5 fw-medium w-75">
              Decription : {product?.description}{" "}
            </p>
            <button className="btn btn-primary mt-5 w-25" onClick={handleCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
