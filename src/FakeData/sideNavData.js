import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import {
  faThList,
  faEdit,
  faHome,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

export const sideNavData = [
  { icon: faHome, title: "Dashboard", path: "/dashboard" },
  { icon: faThList, title: "All Orders", path: "/dashaboard/all-orders" },
  { icon: faAddressCard, title: "Add Review", path: "/dashaboard/add-review" },
  {
    icon: faProductHunt,
    title: "Add Products",
    path: "/dashaboard/add-product",
  },
  { icon: faEdit, title: "Management", path: "/dashaboard/management" },
];
