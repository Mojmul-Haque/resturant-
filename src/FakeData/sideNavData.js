import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import {
  faThList,
  faEdit,
  faHome,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

export const sideNavData = [
  { icon: faHome, title: "Dashboard", path: "/dashboard" },
  { icon: faThList, title: "All Orders", path: "/dashboard/all-orders" },
  { icon: faAddressCard, title: "Add Review", path: "/dashboard/add-review" },
  {
    icon: faProductHunt,
    title: "Add Products",
    path: "/dashboard/add-food",
  },
  { icon: faEdit, title: "Management", path: "/dashboard/management" },
];
