import { PropTypes } from "prop-types";

const TableRow = ({ bookingItem, handleDeleteBtn, handleUpdateBtn }) => {
  const { service, price, email, customerName, img, _id, status } =
    bookingItem || {};
  console.log(bookingItem);

  return (
    <div>
      <tr>
        <th>
          <button
            onClick={() => handleDeleteBtn(_id)}
            className="btn btn-sm btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{service}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">
            Desktop Support Technician
          </span>
        </td>
        <td>Purple</td>
        <th>
          {status === "confirm" ? (
            <span>Confirmed</span>
          ) : (
            <button
              onClick={() => handleUpdateBtn(_id)}
              className="btn btn-ghost btn-xs"
            >
              confirm
            </button>
          )}
        </th>
      </tr>
    </div>
  );
};

TableRow.propTypes = {
  bookingItem: PropTypes.object.isRequired,
  handleDeleteBtn: PropTypes.func.isRequired,
  handleUpdateBtn: PropTypes.func.isRequired,
};

export default TableRow;
