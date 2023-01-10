import { prismaClient } from '../../../database/prismaClient'
import {
  IUserRepository,
  User,
  UserResponse,
  UserSearch,
} from './user.repository'

export class UserPrismaRepository implements IUserRepository {
  async create({ email, username, name }: User): Promise<UserResponse> {
    const user = await prismaClient.user.create({
      data: {
        email,
        username,
        name,
      },
    })
    return user
  }
  async findAll(): Promise<UserResponse[]> {
    return await prismaClient.user.findMany()
  }
  async findBY({ username, email }: UserSearch): Promise<UserResponse | null> {
    const result = await prismaClient.user.findFirst({
      where: {
        username,
        OR: {
          email,
        },
      },
    })

    return result
  }
}
