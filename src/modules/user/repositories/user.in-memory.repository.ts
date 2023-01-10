import {
  IUserRepository,
  User,
  UserResponse,
  UserSearch,
} from './user.repository'
import { randomUUID } from 'crypto'

export class UserInMemoryRepository implements IUserRepository {
  users: UserResponse[] = []
  async create({ email, username, name }: User): Promise<UserResponse> {
    const user: UserResponse = {
      email,
      username,
      name,
      id: randomUUID(),
      createdAt: new Date(),
    }
    this.users.push(user)
    return user
  }
  async findAll(): Promise<UserResponse[]> {
    return this.users
  }
  async findBY({ username, email }: UserSearch): Promise<UserResponse | null> {
    const result = this.users.find(
      (user) => user.username === username || user.email === email
    )

    return result ?? null
  }
}
