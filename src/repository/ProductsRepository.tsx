import Product from '../entities/Product'
import ApiClient from '../services/ApiClient'

export async function getProducts() {
  const response = await ApiClient.get<Array<Product>>('products')
  return response.data
}
