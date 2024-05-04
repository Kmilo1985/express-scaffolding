import { Request, Response } from 'express'
import GetComments from '../actions/comments/GetComments'
import FindComment from '../actions/comments/FindComment'
import CreateCommentDto from '../dtos/comments/CreateCommentDto'
import CreateComment from '../actions/comments/CreateComment'
import FindUser from '../actions/users/FindUser'

export default class CommentsController {
  static async index(_request: Request, response: Response) {
    const comments = await GetComments.handle()
    response.json({ data: comments }).status(200)
  }

  static async show(request: Request, response: Response) {
    const comment = await FindComment.handle(request.params.id)
    response.json({ data: comment }).status(200)
  }

  static async store(request: Request, response: Response) {
    try {
      const dto = await CreateCommentDto.create(request.body)

      const user = await FindUser.handle(dto.user_id)

      const comment = await CreateComment.handle(dto, user)

      response.json({ data: comment }).status(201)
    } catch (error: any) {
      response.json({ errors: error.messages }).status(422)
    }
  }
}
