import React, { useEffect, useState } from "react";
import "./List.css";
import { IndianRupee, Loader2 } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

function List({ url }) {
  const [list, setlist] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchList(silent = false) {
    setLoading(true);
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setlist(response.data.data);
        if (!silent) toast.success("All food items fetched successfully!");  // 👈 added
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch food list.");
    } finally {
      setLoading(false);
    }
  }

  async function removeFood(id) {
    const response = await axios.post(`${url}/api/food/removeFood`, { id: id });
    await fetchList(true);  // 👈 silent = true, avoids duplicate toast
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  }

  useEffect(() => {
    fetchList();  // silent = false by default → shows success toast
  }, []);

  return (
    <div className="list add flex_col p-10 w-full max-w-6xl">
      <p className="text-2xl text-center underline font-bold text-gray-800 mb-6">All Foods List</p>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Loader2 className="w-40 h-40 text-orange-400 animate-spin stroke-1" />
          <p className="text-xl font-medium text-gray-600 animate-pulse">
            Loading All Food Lists...
          </p>
        </div>
      ) : (
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
          {list.map((item, index) => (
            <div
              key={index}
              className="list-table-format border-b border-gray-300 last:border-b-0"
            >
              <img
                src={`${url}/images/${item.image}`}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <p className="text-sm text-gray-600">{item.name}</p>
              <p className="text-sm text-gray-600">{item.category}</p>
              <div className="food-item-price flex items-center gap-0.5 text-sm text-gray-600">
                <IndianRupee className="w-4 h-4 stroke-[1.5]" />
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
              <p
                className="text-lg text-gray-400 cursor-pointer hover:text-red-500 transition-colors"
                onClick={() => removeFood(item._id)}
              >
                x
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default List;