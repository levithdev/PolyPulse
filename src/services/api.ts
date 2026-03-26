import type { Market } from "../types/Market";
import axios from "axios";

const api = axios.create({
  baseURL: '/api'
})

export async function getMarkets(): Promise<Market[]> {
  const { data } = await api.get<Market[]>('/markets', {
    params: {
      limit: 20,
      order: 'volume24hr',
      ascending: false
    }
  })
  return data
}