import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import SingleSupport from "./SingleSupport";

const supportDetails = [
  {
    logo: <MonetizationOnOutlinedIcon />,
    bigtext: "MONEY BACK GURANTEE",
    smalltext: "Shall open divide a one",
  },
  {
    logo: <LocalShippingOutlinedIcon />,
    bigtext: "FREE DELIVERY",
    smalltext: "Shall open divide a one",
  },
  {
    logo: <HeadsetMicOutlinedIcon />,
    bigtext: "ALWAY SUPPORT",
    smalltext: "Shall open divide a one",
  },
  {
    logo: <CurrencyBitcoinOutlinedIcon />,
    bigtext: "SECURE PAYMENT",
    smalltext: "Shall open divide a one",
  },
];
const SupportMain = () => {
  const support = supportDetails.map((item) => {
    return <SingleSupport supportdetails={item} key={Math.random()} />;
  });
  return (
    <div className="container py-10">
      <div className="grid grid-cols-4 gap-4">{support}</div>
    </div>
  );
};

export default SupportMain;
