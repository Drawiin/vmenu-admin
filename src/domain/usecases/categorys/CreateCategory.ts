import { createCategory } from '@data/repository/CategorysRepository'
import Category from '@domain/entities/Category'

export default function CreateCategory(name: string): Promise<Category> {
  return createCategory(name)
}
