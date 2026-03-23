export interface Market {
  id: string
  question: string
  volume: number
  outcomes: string[]
  outcomePrices: string[]
  active: boolean
  endDate: string
}