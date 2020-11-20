import Category from '../entities/Category'
import ApiClient from '../services/ApiClient'

export async function getCategorys(): Promise<Array<Category>> {
  const response = await ApiClient.get<Array<Category>>('categorys')
  return response.data
}

export async function createCategory(name: string): Promise<Category> {
  const response = await ApiClient.post<Category>('categorys', { name })
  return response.data
}
