const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-40 mt-20 hidden">
      <div className="relative">
        <img
          className="h-[60vh]"
          src="/public/images/about_us/person.jpg"
          alt="about us pic"
        />
        <div className="">
          <img
            className="absolute top-40 p-5 left-64  w-80  h-[45vh]"
            src="/public/images/about_us/parts.jpg"
            alt="about us pic"
          />
        </div>
      </div>
      <div className="space-y-5">
        <p className="text-[#FF3811] font-bold">About Us</p>
        <h2 className="font-bold text-4xl">
          We are qualified <br /> & of experience <br /> in this field
        </h2>
        <p className="text-gray-400">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don`t look even slightly believable.{" "}
        </p>
        <p className="text-gray-400">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don`t look even slightly believable.{" "}
        </p>
        <button className="bg-[#FF3811] border-none text-white btn btn-warning rounded capitalize">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
