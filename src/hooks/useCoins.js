import { useQuery } from "@tanstack/react-query";

export const useCoins = () => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['coins'],
    queryFn: async () => {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1',
      )
      return await response.json()
    },
  })
  return { data, isLoading: isLoading, isFetching, error }
};
