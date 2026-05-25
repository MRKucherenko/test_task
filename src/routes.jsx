import { HomeOutlined } from "@ant-design/icons";
import Home from "./pages/Home.jsx";
import { Coins } from "./pages/Coins.jsx";
import { CoinsPaged } from "./pages/CoinsPaged.jsx";
import { Chart } from "./pages/Chart.jsx";

export const routes = [
    { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
    {path: "/coins", label: "Coins", element: <Coins />},
    {path: "/coins-paged", label: "Coins Paged", element: <CoinsPaged />},
    {path: "/chart", label: "Chart", element: <Chart />}
];
