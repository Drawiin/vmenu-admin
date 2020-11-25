import { deletCategory } from '@data/repository/CategorysRepository'

export default function (id: number): Promise<void> {
  return deletCategory(id)
}
