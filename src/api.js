import axios from "axios";

const API = "http://localhost:3000/products";
const cartAPI = "http://localhost:3000/cart";
const categoryAPI = "http://localhost:3000/category";

export const Postproducts = async (data) => {
  try {
    await axios.post(API, data);
    return { message: "Product Added successfully" };
  } catch (error) {
    console.log(error);

    return { message: "Server error" };
  }
};

export const getAllProducts = async () => {
  try {
    const response = await axios.get(API);
    return { message: "Data fetch successfully", response: response.data };
  } catch (error) {
    console.log(error);

    return { message: "Server error" };
  }
};

export const getOneProduct = async (id) => {
  try {
    const response = await axios.get(`${API}/${id}`);
    return { message: "Product fetch successfully", response: response.data };
  } catch (error) {
    console.log(error);

    return { message: "server error" };
  }
};

// post cart product
export const postCartProduct = async (data) => {
  try {
    await axios.post(cartAPI, data);
    return { message: "Product Added in cart successfully" };
  } catch (error) {
    console.log(error);

    return { message: "Server error" };
  }
};

// get cart product
export const getCartProduct = async () => {
  try {
    const response = await axios.get(cartAPI);
    return {
      message: "Cart data fetch successfully ",
      response: response.data,
    };
  } catch (error) {
    console.log(error);
    return { message: "server error" };
  }
};

export const updateCart = async (id, data) => {
  try {
    await axios.put(`${cartAPI}/${id}`, data);
    return { message: "Update successfully" };
  } catch (error) {
    console.log(error);
    return { message: "server error" };
  }
};

export const getCart = async (userEmail) => {
  try {
    const response = await axios.get(cartAPI);
    const userResponse = response.data.filter((ele) => {
      return ele.email === userEmail;
    });

    const newArr = [];
    for (let ele of userResponse) {
      const product = await getOneProduct(ele.productId);
      ele.product = product.response;
      newArr.push(ele);
    }
    return newArr;
  } catch (error) {
    console.log(error);
    return { message: "server error" };
  }
};

export const deletecart = async (id, data) => {
  try {
    await axios.delete(`${cartAPI}/${id}`, data);
    return { message: "Delete successfully" };
  } catch (error) {
    console.log(error);
    return { message: "server error" };
  }
};

// category
export const PostCategory = async (data) => {
  try {
    await axios.post(categoryAPI, data);
    return { message: "category Added successfully" };
  } catch (error) {
    console.log(error);

    return { message: "Server error" };
  }
};

export const getCategory = async () => {
  try {
    const response = await axios.get(categoryAPI);
    return { message: "category fetch successfully", response: response.data };
  } catch (error) {
    console.log(error);

    return { message: "Server error" };
  }
};

// export const filterCategroy = async (id) => {
//   try {
//     const response = await axios.get(`${categoryAPI}/${id}`);
//     return { message: "Product fetch successfully", response: response.data };
//   } catch (error) {
//     console.log(error);

//     return { message: "server error" };
//   }
// };
