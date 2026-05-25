import { useQuery } from "@tanstack/react-query";

export const useChart = (coinId) => {
  const { isLoading, refetch, data, isFetching } = useQuery({
    queryKey: ['chart', coinId],
    queryFn: async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`,
      )
      const json = await response.json();

      return json.prices.map(([timestamp, price]) => ({
        date: new Date(timestamp).toLocaleDateString('en-US'),
        price,
      }));
    },

    refetchInterval: 30000,
    staleTime: 30000
  });
  return {isLoading, refetch, data, isFetching}
}
