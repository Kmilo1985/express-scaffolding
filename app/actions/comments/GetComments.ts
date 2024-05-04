import { dataSource } from '../../../app-data-source'
import { Comment } from '../../models/Comment'

export default class GetComments {
  static async handle() {
    return await dataSource.getRepository(Comment).find({
      relations: {
        user: true,
      },
    })
  }
}
