import React, { useState, useEffect } from "react";
import { deletecart, getCart, updateCart } from "../api";
import { useUser } from "@clerk/react";

function CartProduct() {
  const { user } = useUser();
  const [cartData, setCartData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  //increase qty
  async function increaseQty(id) {
    const updatedCart = cartData.find((item) => item.id == id);
    await updateCart(id, {
      ...updatedCart,
      quantity: updatedCart.quantity + 1,
    });
    setRefresh(true);
  }

   //decrease qty
  async function decreaseQty(id) {
    const updatedCart = cartData.find((item) => item.id == id);
    if(updatedCart.quantity === 1){
      await deletecart(id)
    }
    await updateCart(id, {
      ...updatedCart,
      quantity: updatedCart.quantity - 1,
    });
    setRefresh(true);
  }



  useEffect(() => {
    async function fetchData() {
      const response = await getCart(user.emailAddresses[0].emailAddress);
      setCartData(response);
    }

    fetchData();
    setRefresh(false);
  }, [refresh]);

  let subtotal = 0;
  let fee = 20;
  let GST = 30;
  for (let i of cartData) {
    let total = i.product.price * i.quantity;
    subtotal += total;
  }
  return (
    <div>
      <div className="container p-4">
        <table
          className="text-center mt-5"
          style={{ width: "100%", border: "1px solid black" }}
        >
          <thead>
            <tr className="" style={{ border: "1px solid black" }}>
              <th>Product Image</th>
              <th>Product Title</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {cartData.map((ele, index) => {
              return (
                <>
                  <tr
                    key={index}
                    style={{
                      border: "1px solid black",
                      paddingTop: "50px",
                      height: "100px",
                    }}
                  >
                    <td>
                      <img
                        src={ele.product.image}
                        alt=""
                        style={{ width: "100px", height: "80px" }}
                      />
                    </td>
                    <td>{ele.product.title}</td>

                    <td>
                      <button
                        className="btn btn-sm btn-dark me-2"
                        onClick={() => decreaseQty(ele.id)}
                      >
                        -
                      </button>
                      {ele.quantity}
                      <button
                        className="btn btn-sm btn-dark ms-2"
                        onClick={() => increaseQty(ele.id)}
                      >
                        +
                      </button>
                    </td>
                    <td>Rs.{ele.product.price}</td>
                    <td className="text-success fw-medium">
                      Rs.{ele.product.price * ele.quantity}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="container mb-5 mt-3 ">
        <div className=" border border-dark p-3" style={{ width: "400px" }}>
          <h2 className="mb-4 ">Cart Total</h2>
          <table className="w-100">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>Rs. {subtotal}</td>
              </tr>
              <tr>
                <td>Delivery fee</td>
                <td>Rs. {fee}</td>
              </tr>
              <tr>
                <td>GST</td>
                <td>Rs. {GST}</td>
              </tr>
              <tr>
                <td>To pay</td>
                <td>Rs. {subtotal + fee + GST}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
