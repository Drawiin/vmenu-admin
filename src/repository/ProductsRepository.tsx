import Product from '../entities/Product'
import ApiClient from '../services/ApiClient'

export async function getProducts(): Promise<Array<Product>> {
  const response = await ApiClient.get<Array<Product>>('products')
  return response.data
}
