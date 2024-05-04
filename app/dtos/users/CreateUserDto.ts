export default class CreateUserDto {
  public readonly name: string
  public readonly last_name: string
  public readonly is_active: boolean
  private constructor(name: string, last_name: string, is_active: boolean) {
    this.name = name
    this.last_name = last_name
    this.is_active = is_active
  }

  public static async create(data: object) {
    const {default: vine} = await import('@vinejs/vine')

    vine.convertEmptyStringsToNull = true

    const payload = await vine.validate({
      schema: this.rules(vine),
      data: data,
    })

    return new CreateUserDto(payload.name, payload.last_name, payload.is_active)
  }

  public static rules(vine: any) {
    return vine.object({
      name: vine.string().escape(),
      last_name: vine.string().escape(),
      is_active: vine.boolean(),
    })
  }
}
