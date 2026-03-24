import React, { useState } from "react";
import { getCategory, PostCategory } from "../api";

function AddCategory() {
  const [category, setCategory] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await PostCategory({ name: category });
    alert(response.message);
    setCategory("")
  }

  return (
    <div className="d-flex justify-content-center m-5">
      <div className="bg-secondary-subtle rounded-3 " style={{ width: "40%" }}>
        <h3 className="text-center mt-5">Add Category</h3>
        <form action="" className="p-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Category"
            className="form-control"
            name="title"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <button type="submit" className="btn btn-primary mt-4">
            Add category
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCategory;
