import { getCategorys } from '@data/repository/CategorysRepository'
import Category from '@domain/entities/Category'

export default function (): Promise<Category[]> {
  return getCategorys()
}
