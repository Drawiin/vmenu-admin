import CreateProductRequest from '@data/entities/CreateProductRequest'
import { createProducts } from '@data/repository/ProductsRepository'
import Product from '@domain/entities/Product'

export default function createProduct(
  productRequest: CreateProductRequest
): Promise<Product> {
  return createProducts(productRequest)
}
