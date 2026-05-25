import { useState } from "react";
import { useChart } from "../hooks/useChart";
import { Button, Segmented, Spin } from "antd";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Chart = () => {
  const [coinId, setCoinId] = useState("bitcoin");

  const { data, isLoading, isFetching, refetch } = useChart(coinId);

  return (
    <>
      <Segmented
        options={["bitcoin", "ethereum", "dogecoin"]}
        value={coinId}
        onChange={setCoinId}
      />

      <Button onClick={refetch} loading={isFetching}>
        Refresh
      </Button>

      {isLoading || isFetching ? (
        <Spin />
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis domain={["auto", "auto"]} />
            <Tooltip formatter={(value) => value.toFixed(2)} />
            <Line type="monotone" dataKey="price" dot={false} strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
