import { Request, Response } from 'express'
import { get } from 'lodash'

import Constant from '../constants/Constant'
import UserService from '../services/UserService'
import { responseSuccess } from '../utils/response'

import { IUser } from '../types/UserType'

interface IUserController {
  getUsers(req: Request, res: Response): Promise<void>
}

// Controller handle request and response.
class UserController implements IUserController {
  constructor(private userService: UserService) {}

  async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const response: IUser[] = await this.userService.findUsers()
      res.json(responseSuccess(Constant.OK.CODE, Constant.OK.MESSAGE, response))
      return
    } catch (err) {
      throw new Error(get(err, 'message', 'UserController.getUsers'))
    }
  }
}

export default UserController
