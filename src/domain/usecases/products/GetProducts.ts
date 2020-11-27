import { getProducts } from '@data/repository/ProductsRepository'
import Product from '@domain/entities/Product'

export default function GetProduct(): Promise<Product[]> {
  return getProducts()
}
