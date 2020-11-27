import { deletCategory } from '@data/repository/CategorysRepository'

export default function DeleteCategory(id: number): Promise<void> {
  return deletCategory(id)
}
