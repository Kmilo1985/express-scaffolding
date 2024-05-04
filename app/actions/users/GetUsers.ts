import { dataSource } from '../../../app-data-source'
import { User } from '../../models/User'

export default class GetUsers {
  static async handle() {
    return await dataSource.getRepository(User).find({
      relations: {
        comments: true,
      },
    })
  }
}
