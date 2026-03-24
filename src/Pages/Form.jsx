import React, { useEffect, useState } from "react";
import { getCategory, Postproducts } from "../api";
import GetProduct from "./getProduct";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    stock: "",
    description: "",
  });

  function handleData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await Postproducts(formData);
    alert(response.message);
  }

  useEffect(() => {
    async function fetchCategory() {
      const res = await getCategory();
      setCategories(res.response);
      console.log(res);
    }
    fetchCategory();
  }, []);

  return (
    <div className="d-flex justify-content-center m-5">
      <div className="bg-secondary-subtle rounded-3 " style={{ width: "40%" }}>
        <h2 className="text-center mt-4">Add Products</h2>

        <form action="" className="p-4" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
            name="title"
            value={formData.title}
            onChange={handleData}
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Product Image"
            name="image"
            value={formData.image}
            onChange={handleData}
          />
          <br />
          <select
            name="category"
            id="category"
            className="form-control"
            value={formData.category}
            onChange={handleData}
          >
            <option value="">Select Category</option>
            {categories?.map((c, index) => (
              <option key={index} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          <br />

          <input
            type="number"
            className="form-control"
            placeholder="Price"
            name="price"
            value={formData.price}
            onChange={handleData}
          />
          <br />
          <input
            type="number"
            className="form-control"
            placeholder="Stock"
            name="stock"
            value={formData.stock}
            onChange={handleData}
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="description"
            name="description"
            value={formData.description}
            onChange={handleData}
          />
          <br />
          <button type="submit" className="btn btn-success">
            Add Product
          </button>
        </form>
        <button
          className="btn btn-success"
          onClick={() => {
            navigate("/GetProduct");
          }}
          style={{
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          See All Product
        </button>
      </div>
    </div>
  );
}

export default Form;
