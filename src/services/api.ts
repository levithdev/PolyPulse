import type { Market } from "../types/market";

const BASE_URL = 'api/'

export async function getMarkets(): Promise<Market[]> {
  const response = await fetch(`${BASE_URL}/markets?limit=20&order=volume24hr&ascending=false`)

  if (!response.ok) {
    throw new Error('Error 404')
  }

  return response.json()
}