import { dataSource } from '../../../app-data-source'
import { Comment } from '../../models/Comment'

export default class FindComment {
  static async handle(comment_id: any) {
    return await dataSource.getRepository(Comment).findOneByOrFail({
      id: comment_id,
    })
  }
}
