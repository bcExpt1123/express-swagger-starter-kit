export interface IUserBasicPayload {
  firstname: string
  lastname: string
  email: string
}
export interface IUserPayload extends IUserBasicPayload {
  id?: number
}
