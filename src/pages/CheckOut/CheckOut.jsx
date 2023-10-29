import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const serviceData = useLoaderData();
  const { title, _id, price, img } = serviceData || {};
  console.log(serviceData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const date = form.date.value;
    const email = user?.email;

    console.log(date);

    const bookingInfo = {
      customerName: name,
      email,
      img,
      price: price,
      date,
      service: title,
      service_id: _id,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <h2 className="text-center font-bold text-2xl py-3">
            Book Service: {title}
          </h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              ></label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              ></label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="date"
                name="date"
                required
                placeholder=""
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              ></label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="amout"
                readOnly
                defaultValue={price}
                placeholder="Due Amout"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              ></label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="email"
                defaultValue={user?.email}
                readOnly
                placeholder="Your Email"
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="w-full">
              <button
                className="shadow  w-full bg-red-600 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Order Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
