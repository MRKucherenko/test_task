import { useSearchParams } from 'react-router-dom';
import { useCoinsPaged } from '../hooks/useCoinsPaged';
import { CoinsTable } from '../components/CoinsTable';

export const CoinsPaged = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const { data, isLoading, isFetching} = useCoinsPaged(page);

  const handelChange = (event) => {
    setSearchParams({
      page: String(event),
    });
  };

  return (
    <CoinsTable
      data={data}
      loading={isLoading || isFetching}
      pagination={{
        current: page,
        pageSize: 20,
        total: 400,

        onChange: handelChange,

        showSizeChanger: false,
      }}
    />
  );
};