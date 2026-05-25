import {
  useQuery,
  keepPreviousData,
} from '@tanstack/react-query';

export const useCoinsPaged = (page) => {
  const { data, isLoading, isFetching, error} = useQuery({
    queryKey: ['coins-paged', page],
    queryFn: async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=${page}`
      );

      return response.json();
    },

    placeholderData: keepPreviousData,
  });

  return { data, isLoading, isFetching, error };
};
