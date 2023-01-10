import { IUserRepository, User } from './repositories/user.repository'

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async create({ email, name, username }: User) {
    const verifyIfExistsUser = await this.userRepository.findBY({
      email,
      username,
    })

    if (verifyIfExistsUser) throw new Error('User already exists!')

    const userCreated = await this.userRepository.create({
      email,
      name,
      username,
    })

    return userCreated
  }

  async find() {
    return this.userRepository.findAll()
  }
}
