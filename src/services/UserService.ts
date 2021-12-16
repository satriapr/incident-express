import { IUser } from '../types/UserType'
import UserModel from '../models/UserModel'

interface IUserService {
  findUsers(): Promise<IUser[]>
}

// Query and business logic
class UserService implements IUserService {
  // Find active record
  async findUsers(): Promise<IUser[]> {
    const response = await UserModel.find({ active: 1 })
    return response
  }
}

export default UserService
