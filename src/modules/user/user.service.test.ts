import { describe, expect, test } from 'vitest'
import { UserInMemoryRepository } from './repositories/user.in-memory.repository'
import { UserService } from './user.service'

describe('Create User', () => {
  test('Should be able to create a new user', async () => {
    const userRepository = new UserInMemoryRepository()

    const userService = new UserService(userRepository)

    const result = await userService.create({
      email: 'teste@email.com.br',
      name: 'name_test',
      username: 'username_test',
    })

    expect(result).toHaveProperty('id')
  })

  test('Should be able to find all', async () => {
    const userRepository = new UserInMemoryRepository()

    const userService = new UserService(userRepository)

    await userService.create({
      email: 'teste@email.com.br',
      name: 'name_test',
      username: 'username_test',
    })

    const result = await userService.find()

    expect(result.length).toBe(1)
  })
})
