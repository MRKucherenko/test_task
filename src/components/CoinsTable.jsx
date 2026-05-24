import { Table } from "antd";
import { useCoins } from "../hooks/useCoins";
import { columns } from "../utils/columsHelpers";

export const CoinsTable = () => {
  const {isLoading, data} = useCoins();

  return (
   <Table 
      columns={columns}
      dataSource={data ?? []}
      rowKey="id"
      loading={isLoading}
      scroll={{ y: 600 }}
      pagination={false}
   />
  );
}