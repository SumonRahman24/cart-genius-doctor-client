import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import TableRow from "./TableRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bookings?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => setBookings(res.data));

    // fetch(`http://localhost:5000/bookings?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [user?.email]);

  // handle delete
  const handleDeleteBtn = (_id) => {
    console.log(_id);

    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = bookings.filter(
          (bookingItem) => bookingItem?._id !== _id
        );
        setBookings(remaining);
      });
  };

  // handle update
  const handleUpdateBtn = (_id) => {
    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = bookings.filter(
          (bookingItem) => bookingItem?._id !== _id
        );
        const updated = bookings.find(
          (bookingItem) => bookingItem?._id === _id
        );
        updated.status = "confirm";
        const newBookings = [updated, ...remaining];
        setBookings(newBookings);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((bookingItem) => (
              <TableRow
                key={bookingItem?._id}
                bookingItem={bookingItem}
                handleDeleteBtn={handleDeleteBtn}
                handleUpdateBtn={handleUpdateBtn}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
