import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";


import axios from "axios";
import { toast } from "react-toastify";

function Add({url}) {
  // const url = "http://localhost:4000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  function onChangeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    const formaData = new FormData();
    formaData.append("name", data.name);
    formaData.append("description", data.description);
    formaData.append("price", Number(data.price));
    formaData.append("category", data.category);
    formaData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formaData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false)
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message)
      
    }
  }
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="add w-[70%] ml-[max(5vw,25px)] mt-12.5 text-[#6d6d6d] text-[16px]">
      <form className="flex_col" action="" onSubmit={onSubmitHandler}>
        {/* Image Upload */}
        <div className="add-img-upload flex_col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              className="w-30"
              alt=""
            />
          </label>
          <input
            type="file"
            id="image"
            hidden
            required
            // onChange={(e) => setImage(e.target.files[0])}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* Product Name */}
        <div className="add-product-name flex_col w-[max(40%,280px)]">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            placeholder="Type here"
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Product Description */}
        <div className="add-product-description flex_col w-[max(40%,280px)]">
          <p>Product Description</p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            rows="6"
            placeholder="Write content here"
            className="p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>

        {/* Category & Price */}
        <div className="add-category-price flex gap-7.5">
          {/* Category */}
          <div className="add-category flex_col">
            <p>Product Category</p>
            <select
              name="category"
              onChange={onChangeHandler}
              value={data.category}
              className="p-2 border border-gray-300 rounded-md max-w-[120px]]"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          {/* Price */}
          <div className="add-price flex_col">
            <p>Product Price</p>
            <input
              type="number"
              onChange={onChangeHandler}
              name="price"
              value={data.price}
              placeholder="Rs20"
              className="p-2 border border-gray-300 rounded-md max-w-30"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="add-btn max-w-30 border-none p-2.5 bg-black text-white cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Add;
