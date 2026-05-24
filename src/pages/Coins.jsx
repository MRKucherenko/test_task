import { CoinsTable } from "../components/CoinsTable"
import { useCoins } from "../hooks/useCoins"

export const Coins = () => {
  const { data, isLoading} = useCoins();

  return(
    <CoinsTable data={data} loading={isLoading} pagination={false}/>
  )
}