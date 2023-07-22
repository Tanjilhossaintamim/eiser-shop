import SingelLink from "./SingelLink";

const allLinks = [
  {
    heading: "Top Products",
    link1: "Managed Website",
    link2: "Manage Reputation",
    link3: "Power Tools",
    link4: "Marketing Service",
  },
  {
    heading: "Quick Links",
    link1: "Jobs",
    link2: "Brand Assets",
    link3: "Investor Relations",
    link4: "Terms of Service",
  },
  {
    heading: "Features",
    link1: "Jobs",
    link2: "Brand Assets",
    link3: "Investor Relations",
    link4: "Terms of Service",
  },
  {
    heading: "Resources",
    link1: "Guides",
    link2: "Research",
    link3: "Experts",
    link4: "Agencies",
  },
];

const FooterComponents = () => {
  let link = allLinks.map((link) => {
    return <SingelLink link={link} key={Math.random()}/>;
  });
  return (
    <div className="w-full h-[50vh] bg-[#0D0D1F] mt-10">
      <div className="container">
        <div className="flex justify-between items-center h-[30vh] my-auto">{link}</div>
      </div>
      <div>
        <p className="text-white text-center">&copy; copyright by <span className="text-color-green">Tanjil Hossain</span> </p>
      </div>
    </div>
  );
};

export default FooterComponents;
