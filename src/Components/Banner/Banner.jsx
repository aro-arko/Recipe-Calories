import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <h3 className="banner-title text-5xl w-3/4 mx-auto font-bold mb-3">
          Discover an exceptional cooking class tailored for you!
        </h3>
        <p className="banner-description w-3/4 m-auto">
          Discover an exceptional cooking class tailored just for you! Enhance
          your culinary skills with personalized lessons that cater to your
          tastes and skill level. Join us to transform your kitchen into a
          gourmet haven.
        </p>
      </div>
      <div className="btn-container mt-4">
        <button className="btn btn-primary bg-green-500 px-6 text-black font-medium p-4 rounded-full hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mr-6">
          Explore Now
        </button>
        <button className="btn bg-transparent text-white px-6 py-4 rounded-full border border-white hover:border-slate-100 hover:bg-slate-100 hover:text-black">
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;
