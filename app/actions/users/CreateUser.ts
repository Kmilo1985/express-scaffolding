import { dataSource } from '../../../app-data-source'
import CreateUserDto from '../../dtos/users/CreateUserDto'
import { User } from '../../models/User'

export default class CreateUser {
  static async handle(dto: CreateUserDto) {
    return await dataSource.getRepository(User).save({ ...dto })
  }
}
