export default class CreateCommentDto {
  public readonly description: string
  public readonly user_id: number

  private constructor(description: string, user_id: number) {
    this.description = description
    this.user_id = user_id
  }

  public static async create(data: object) {
    const {default: vine} = await import('@vinejs/vine')

    vine.convertEmptyStringsToNull = true

    const payload = await vine.validate({
      schema: this.rules(vine),
      data: data,
    })

    return new CreateCommentDto(payload.description, payload.user_id)
  }

  public static rules(vine: any) {
    return vine.object({
      description: vine.string().escape(),
      user_id: vine.number()
    })
  }
}
