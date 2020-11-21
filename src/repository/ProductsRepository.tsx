import Product from '../entities/Product'
import ApiClient from '../services/ApiClient'

export interface CreateProductRequest {
  name: string
  description: string
  price: number
  quantity: number
  category: number
  photos?: Array<File>
}
export async function getProducts(): Promise<Array<Product>> {
  const response = await ApiClient.get<Array<Product>>('products')
  return response.data
}

export async function createProducts(
  product: CreateProductRequest
): Promise<Product> {
  const { name, description, price, quantity, category, photos } = product
  const data = new FormData()

  data.append('name', name)
  data.append('description', description)
  data.append('price', String(price))
  data.append('quantity', String(quantity))
  data.append('category', String(category))

  photos?.forEach(img => data.append('photos', img))

  const response = await ApiClient.post<Product>('products', data)

  return response.data
}
