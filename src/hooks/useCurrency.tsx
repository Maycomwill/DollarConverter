import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";
import {AxiosPromise} from 'axios' 
import { CurrencyProps } from "../interfaces/Currencies";

async function fetchCurrency(): AxiosPromise<CurrencyProps>{
  const res = await api.get<CurrencyProps>('/latest.json?app_id=e8fe5018c24f4e4b95c38cd9652cb966')
  return res
}

export function useCurrency() {
  const query = useQuery({
      queryFn: fetchCurrency,
      queryKey: ['currencies'],

  })
  return {...query, data: query.data}
}
