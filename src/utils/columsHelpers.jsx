import formatLargeNumber from './formatters'

export const columns = [
  {
    title: '#',
    dataIndex: 'market_cap_rank',
    sorter: (a, b) => a.market_cap_rank - b.market_cap_rank,
  },

  {
    title: 'Name',
    dataIndex: 'name',

    render: (text, record) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img
          src={record.image}
          alt={text}
          style={{ width: '20px', height: '20px' }}
        />

        <span>{text}</span>
      </div>
    ),
  },

  {
    title: 'Price',
    dataIndex: 'current_price',

    render: (value) => `$${value.toLocaleString('en-US')}`,

    sorter: (a, b) => a.current_price - b.current_price,
  },

  {
    title: '24h %',
    dataIndex: 'price_change_percentage_24h',

    render: (value) => (
      <p style={{ color: value > 0 ? 'green' : 'red' }}>
        {value.toFixed(2)}%
      </p>
    ),

    sorter: (a, b) =>
      a.price_change_percentage_24h - b.price_change_percentage_24h,
  },

  {
    title: 'Market Cap',
    dataIndex: 'market_cap',

    render: (value) => formatLargeNumber(value),

    sorter: (a, b) => a.market_cap - b.market_cap,
  },

  {
    title: 'Volume 24h',
    dataIndex: 'total_volume',

    render: (value) => formatLargeNumber(value),

    sorter: (a, b) => a.total_volume - b.total_volume,
  },
];