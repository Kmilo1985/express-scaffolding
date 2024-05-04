import { dataSource } from '../../../app-data-source'
import { User } from '../../models/User'

export default class FindUser {
  static async handle(user_id: any) {
    return await dataSource.getRepository(User).findOneByOrFail({
      id: user_id,
    })
  }
}
