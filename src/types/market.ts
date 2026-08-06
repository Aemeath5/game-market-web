export type ProductStatus = 'selling' | 'reserved' | 'sold'

export interface Product {
  id: number
  title: string
  game: string
  server: string
  price: number
  level: number
  tags: string[]
  seller: string
  sellerLevel: number
  image: string
  accent: 'pink' | 'blue' | 'gold' | 'purple'
  status: ProductStatus
  views: number
}
