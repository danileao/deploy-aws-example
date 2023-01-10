import { Request, Response } from 'express'
import { UserPrismaRepository } from './repositories/user.prisma.repository'
import { UserService } from './user.service'

export class UserController {
  async create(request: Request, response: Response) {
    const userPrismRepository = new UserPrismaRepository()
    const userService = new UserService(userPrismRepository)
    try {
      const user = await userService.create(request.body)
      return response.json(user)
    } catch (err: any) {
      return response.status(400).json({ error: err.message })
    }
  }

  async find(request: Request, response: Response) {
    const userPrismRepository = new UserPrismaRepository()
    const userService = new UserService(userPrismRepository)
    try {
      const users = await userService.find()
      return response.json(users)
    } catch (err: any) {
      return response.status(400).json({ error: err.message })
    }
  }
}
