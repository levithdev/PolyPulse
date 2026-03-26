import { useQuery } from '@tanstack/react-query'
import { getMarkets } from '../services/api'
import type { Market } from '../types/Market'

export function useMarket() {
  return useQuery<Market[]>({
    queryKey: ['markets'],
    queryFn: getMarkets,
    staleTime: 1000 * 60,
  })
}