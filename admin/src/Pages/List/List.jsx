import React, { useEffect, useState } from "react";
import "./List.css";
import { IndianRupee } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

function List({url}) {
  // const url = "http://localhost:4000";

  const [list, setlist] = useState([]);

  async function fetchList() {
    const response = await axios.get(`${url}/api/food/list`);
    // console.log(response.data);
    if (response.data.success) {
      setlist(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  }

  async function removeFood(id) {
    // console.log(id);
    const response = await axios.post(`${url}/api/food/removeFood`,{id:id});
    console.log(response)
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message);
    }else{
      toast.error(response.data.message);
    }



  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex_col p-10 w-full max-w-6xl">
      <p className="text-2xl font-bold text-gray-800 mb-6">All Foods List</p>

      <div className="list-table border border-gray-300 rounded-md overflow-hidden">
        {/* Header Row */}
        <div className="list-table-format title bg-gray-100">
          <b className="text-sm text-gray-600">Image</b>
          <b className="text-sm text-gray-600">Name</b>
          <b className="text-sm text-gray-600">Category</b>
          <b className="text-sm text-gray-600">Price</b>
          <b className="text-sm text-gray-600">Action</b>
        </div>

        {/* Data Rows */}
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="list-table-format  border-b border-gray-300 last:border-b-0"
            >
              <img
                src={`${url}/images/${item.image}`}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <p className="text-sm text-gray-600">{item.name}</p>
              <p className="text-sm text-gray-600">{item.category}</p>
              {/* <p className="text-sm text-gray-600">${item.price}</p> */}
              <div className="food-item-price flex items-center gap-0.5 text-sm text-gray-600">
                <IndianRupee className="w-4 h-4 stroke-[1.5]" />
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
              <p className="text-lg text-gray-400 cursor-pointer hover:text-red-500 transition-colors "
              onClick={() => removeFood(item._id)}>
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
