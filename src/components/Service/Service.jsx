import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-28">
      <div className="text-center space-y-3">
        <p className="text-[#FF3811] font-bold">Service</p>
        <h2 className="font-bold text-4xl">Our Service Area</h2>
        <p className="text-gray-400">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don`t look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center pt-10">
        {services?.map((service) => (
          <ServiceCard service={service} key={service?._id} />
        ))}
      </div>
    </div>
  );
};

export default Service;
