import ApiClient from '@data/client/ApiClient'
import CreateProductRequest from '@data/entities/CreateProductRequest'
import createFormData from '@data/utils/FormDataCreator'
import Product from '@domain/entities/Product'

export async function getProducts(): Promise<Array<Product>> {
  return ApiClient.getProducts()
}

export async function getProduct(id: number): Promise<Product> {
  return ApiClient.getProduct(id)
}

export async function createProducts(
  product: CreateProductRequest
): Promise<Product> {
  return ApiClient.createProduct(createFormData(product))
}

export async function deleteProduct(id: number): Promise<void> {
  return ApiClient.deleteProduct(id)
}
