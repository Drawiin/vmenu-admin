import Category from '../entities/Category'
import ApiClient from '../services/ApiClient'

export async function getCategorys(): Promise<Array<Category>> {
  const response = await ApiClient.get<Array<Category>>('categorys')
  return response.data
}

export async function show(id: number): Promise<Category> {
  const response = await ApiClient.get<Category>(`categorys/${id}`)
  return response.data
}

export async function createCategory(name: string): Promise<Category> {
  const response = await ApiClient.post<Category>('categorys', { name })
  return response.data
}

export async function updateCategory({
  name,
  id
}: Category): Promise<Category> {
  const response = await ApiClient.post<Category>(`categorys/${id}`, { name })
  return response.data
}

export async function deletCategory(id: number): Promise<void> {
  const response = await ApiClient.delete<void>(`categorys/${id}`)
  return response.data
}
