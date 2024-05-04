import { Request, Response } from 'express'
import GetUsers from '../actions/users/GetUsers'
import FinUser from '../actions/users/FindUser'
import CreateUserDto from '../dtos/users/CreateUserDto'
import CreateUser from '../actions/users/CreateUser'

export default class UsersController {
  static async index(_request: Request, response: Response) {
    const users = await GetUsers.handle()
    response.json({ data: users }).status(200)
  }

  static async show(request: Request, response: Response) {
    const user = await FinUser.handle(request.params.id)
    response.json({ data: user }).status(200)
  }

  static async store(request: Request, response: Response) {
    try {
      const dto = await CreateUserDto.create(request.body)
      const user = await CreateUser.handle(dto)
      response.json({ data: user }).status(201)
    } catch (error: any) {
      response.json({ errors: error.messages }).status(422)
    }
  }
}
