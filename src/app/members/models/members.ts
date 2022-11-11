export type FinancialType = 'income' | 'outcome' | 'loan' | 'investment'

export interface Name {
  first: string
  last: string
}

export interface Members {
  type: FinancialType
  _id: string
  amount: number
  name: Name
  company: string
  email: string
  phone: string
  address: string
}
