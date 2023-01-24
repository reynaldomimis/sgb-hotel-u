import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";

const MenuItems = [
  {
    title: "Home",
    path: "/",
    icon: <HomeOutlinedIcon className="cn-ic" />,
    cName: "nav-text",
  },
  {
    title: "Rooms",
    path: "/rooms",
    icon: <ChairOutlinedIcon className="cn-ic" />,
    cName: "nav-text",
  },
  {
    title: "Reservation",
    path: "/reservation",
    icon: <PaymentsOutlinedIcon className="cn-ic" />,
    cName: "nav-text",
  },
  {
    title: "Facilities",
    path: "/facilities",
    icon: <ApartmentOutlinedIcon className="cn-ic" />,
    cName: "nav-text",
  },
  {
    title: "Gallery",
    path: "/gallery",
    icon: <CollectionsOutlinedIcon className="cn-ic" />,
    cName: "nav-text",
  },
  {
    title: "Reviews",
    path: "/reviews",
    icon: <ReviewsOutlinedIcon className="cn-ic" />,
    cName: "nav-text",
  },
  {
    title: "Location",
    path: "/location",
    icon: <LocationOnOutlinedIcon className="cn-ic" />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <ForwardToInboxOutlinedIcon className="cn-ic" />,
    cName: "nav-text",
  },
];

const MenuRoomsType = [
  {
    title: "Studio",
    img: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1665626267/sgbh_colection/pic6_pgsidz.jpg",
    sqm: 35.95,
    mGuest: 2,
  },
  {
    title: "Deluxe",
    img: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1665626267/sgbh_colection/pic1_yuyqvx.png",
    sqm: 47.93,
    mGuest: 2,
  },
  {
    title: "1 Bedroom Suite",
    img: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1665625676/sgbh_colection/main_yoxbfy.jpg",
    sqm: 68.96,
    mGuest: 2,
  },
  {
    title: "2 Bedroom Suite",
    img: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1665626268/sgbh_colection/pic7_xywkjq.jpg",
    sqm: 68.96,
    mGuest: 2,
  },
];

export { MenuItems, MenuRoomsType };
