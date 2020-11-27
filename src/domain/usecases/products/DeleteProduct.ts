import { deleteProduct } from '@data/repository/ProductsRepository'

export default function DeleteProduct(id: number): Promise<void> {
  return deleteProduct(id)
}
