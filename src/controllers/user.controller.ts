import {
  IUserBasicPayload, IUserPayload,
} from '../interfaces';
import { User } from '../sqlz/models';

export default class UserController {

  public async fetch(id: number) {
    return User.findByPk(id)
  }

  public async fetchWithEmail(email: string) {
    return User.findOne({
      where: { email },
      attributes: ['id', 'firstname', 'lastname', 'email', 'phone']
    })
  }

  public async fetchAll() {
    return User.findAll()
  }

  public async create(body: IUserBasicPayload) {
    return User.create(body);
  }

  public async update(body: IUserPayload, id: number) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error(`Not found user ${id}`)
    }
    return User.update(body, { where: { id }, returning: true });
  }

  public async delete(id: number) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error(`Not found user ${id}`)
    }
    return User.destroy({ where: { id } });
  }
}
