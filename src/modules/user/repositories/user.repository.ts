export type User = {
  username: string
  name: string
  email: string
}

export type UserResponse = User & {
  id: string
  createdAt: Date
}

export type UserSearch = {
  username?: string
  email?: string
}

export interface IUserRepository {
  create(data: User): Promise<UserResponse>
  findAll(): Promise<UserResponse[]>
  findBY(data: UserSearch): Promise<UserResponse | null>
}
