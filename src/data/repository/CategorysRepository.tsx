import ApiClient from '@data/client/ApiClient'
import Category from '@domain/entities/Category'

export async function getCategorys(): Promise<Array<Category>> {
  return ApiClient.getCategorys()
}

export async function show(id: number): Promise<Category> {
  return ApiClient.getCategory(id)
}

export async function createCategory(name: string): Promise<Category> {
  return ApiClient.createCategory(name)
}

export async function updateCategory({
  name,
  id
}: Category): Promise<Category> {
  return ApiClient.updateCategory(id, name)
}

export async function deletCategory(id: number): Promise<void> {
  return ApiClient.deletCategory(id)
}
