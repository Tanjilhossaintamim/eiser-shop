import { useNavigate } from "react-router-dom";

const SingelLink = ({ link }) => {
  const navigate = useNavigate();
  const clickLink = (link) => {
    navigate("/" + link);
  };
  return (
    <div className="text-white">
      <h1 className="text-xl font-semibold pb-8">{link.heading}</h1>
      <p
        className="text-[#797979] my-2 hover:text-white transition-colors duration-300 cursor-pointer"
        onClick={() => clickLink(link.link1)}
      >
        {link.link1}
      </p>
      <p
        className="text-[#797979] my-2 hover:text-white transition-colors duration-300 cursor-pointer"
        onClick={() => clickLink(link.link2)}
      >
        {link.link2}
      </p>
      <p
        className="text-[#797979] my-2 hover:text-white transition-colors duration-300 cursor-pointer"
        onClick={() => clickLink(link.link3)}
      >
        {link.link3}
      </p>
      <p
        className="text-[#797979] my-2 hover:text-white transition-colors duration-300 cursor-pointer"
        onClick={() => clickLink(link.link4)}
      >
        {link.link4}
      </p>
    </div>
  );
};

export default SingelLink;
