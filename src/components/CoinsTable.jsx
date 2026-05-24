import { Table } from "antd";
import { columns } from "../utils/columsHelpers";

export const CoinsTable = ({ data, loading, pagination}) => {

  return (
   <Table 
      columns={columns}
      dataSource={data ?? []}
      rowKey="id"
      loading={loading}
      scroll={{ y: 600 }}
      pagination={pagination}
   />
  );
}