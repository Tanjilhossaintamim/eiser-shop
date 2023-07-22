import Manimage from "../../../../assets/images/banner-man.png";

const Banner = () => {
  return (
    <div className="w-full h-[70vh] bg-[url('src/assets/images/banner.jpg')] relative">
      <div className="container flex justify-between items-center my-auto h-full">
        <div className="w-1/2">
          <h5 className="text-white leading-relaxed font-semibold pb-2">
            MEN COLLECTION
          </h5>
          <h1 className="text-7xl text-white font-bold">
            <span className="text-color-green">Show </span>Your <br />
            Personal <span className="text-color-green">Style</span>
          </h1>
          <p className="text-white my-4 text-xl capitalize">
            Fowl saw dry which a above together place.
          </p>
          <button className="w-60 px-2 bg-color-green py-3 text-white rounded mt-6 hover:border border-color-green hover:bg-transparent hover:text-color-green font-bold transition-colors duration-300 ease-linear">
            VIEW COLLECTION
          </button>
        </div>
        <div className="w-1/2 relative overflow-hidden">
          <img src={Manimage} alt="BannerMan" className="w-[85%]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
