
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../../../Axios/UseAxiosPublic";
import useProducts from "../../../../Hook/useProducts";

const AllProducts = () => {
  const [products,refetch] = useProducts();
    const AxiosPublic=UseAxiosPublic()
    const handleDeleted = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You want to delete this Blog!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete blog",
        }).then((result) => {
          if (result.isConfirmed) {
            AxiosPublic.delete(`/product/${id}`)
            .then((res) => {
              refetch();
              if (res.data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your blog has been deleted.",
                  icon: "success",
                });
              }
            });
          }
        });
      };

  return (
    <div>
      <div className="overflow-x-auto px-24 mt-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
                Serial
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
                Category
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-gray-900">
                Price
              </th>
              <th className="px-4 py-2 text-start">Deleted</th>
              <th className="px-4 py-2 text-start">Update</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((menuData, index) => (
              <tr key={menuData._id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {menuData.title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {menuData.category}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {menuData.price}
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  <button
                    onClick={() => handleDeleted(menuData._id)}
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Delete
                  </button>
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  <Link to={`/dashboard/admin/updateMenu/${menuData._id}`}>
                    <button className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                      Update
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
