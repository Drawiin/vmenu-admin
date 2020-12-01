import User from '@domain/entities/User'
import { setValue } from '@domain/utils/cache/Cache'
import { USER_ADMIN_KEY } from '@domain/utils/constants/keys'

export default function SetUser(user: User): void {
  console.log(user)
  return setValue<User>(USER_ADMIN_KEY, user)
}
