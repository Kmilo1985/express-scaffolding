import { dataSource } from '../../../app-data-source'
import CreateCommentDto from '../../dtos/comments/CreateCommentDto'
import { Comment } from '../../models/Comment'
import { User } from '../../models/User'

export default class CreateComment {
  static async handle(dto: CreateCommentDto, user: User) {
    return await dataSource.getRepository(Comment).save({ 
        description: dto.description,
        user: user
     })
  }
}
