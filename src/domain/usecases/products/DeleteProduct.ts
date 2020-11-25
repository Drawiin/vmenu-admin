import { deleteProduct } from '@data/repository/ProductsRepository'

export default function (id: number): Promise<void> {
  return deleteProduct(id)
}
