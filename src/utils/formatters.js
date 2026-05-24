const formatLargeNumber = (value) => {
  if (value >= 1000000000000) {
    return `$${(value / 1000000000000).toFixed(2)}T`;
  }

  if (value >= 1000000000) {
    return `$${(value / 1000000000).toFixed(2)}B`;
  }

  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  }

  return `$${value.toFixed(2)}`;
};

export default formatLargeNumber;
