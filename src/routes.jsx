import {
  FormOutlined,
  HomeOutlined,
  LineChartOutlined,
  TabletOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import Home from "./pages/Home.jsx";
import { Coins } from "./pages/Coins.jsx";
import { CoinsPaged } from "./pages/CoinsPaged.jsx";
import { Chart } from "./pages/Chart.jsx";
import { Wizard } from "./pages/Wizard.jsx";

export const routes = [
  { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
  {
    path: "/coins",
    label: "Coins",
    icon: <UnorderedListOutlined />,
    element: <Coins />,
  },
  {
    path: "/coins-paged",
    label: "Coins Paged",
    icon: <TabletOutlined />,
    element: <CoinsPaged />,
  },
  {
    path: "/chart",
    label: "Chart",
    icon: <LineChartOutlined />,
    element: <Chart />,
  },
  {
    path: "/wizard",
    label: "Wizard",
    icon: <FormOutlined />,
    element: <Wizard />,
  },
];
