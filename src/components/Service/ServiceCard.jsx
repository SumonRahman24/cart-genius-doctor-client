import { PropTypes } from "prop-types";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, price, title, _id } = service || {};
  return (
    <>
      <div className="card w-80 bg-base-100 shadow-xl rounded-md border-2">
        <figure className="px-4 pt-4">
          <img src={img} alt="Shoes" className="rounded-xl h-48" />
        </figure>
        <div className=" p-4 ">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between items-center text-[#FF3811]">
            <p className=" font-bold">Price : {price}</p>
            <Link to={`/checkOut/${_id}`}>
              <button className="btn btn-outline border-none">
                <BiRightArrowAlt className="text-2xl " />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
