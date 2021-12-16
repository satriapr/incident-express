import UserController from '../UserController'
import Constants from '../../constants/Constant'

describe('UserController - getUsers', () => {
  const mockData = [
    {
      fullName: 'Admin 1',
      role: 'admin',
      email: 'admin@example.com',
      password: '',
      active: 1,
      createdAt: '2021-01-01 00:00:00',
      updatedAt: '2021-01-01 00:00:00',
      mobilePhone: '+6599999999',
    },
  ]

  it('Should response list of user', async () => {
    const mockUserService = {
      findUsers: jest.fn(async () => mockData),
    }

    const userController = new UserController(mockUserService as any)

    const mockRequest = {
      query: {},
    }

    const mockResponse = {
      json: jest.fn(),
    }

    await userController.getUsers(mockRequest as any, mockResponse as any)

    expect(mockResponse.json).toBeCalledWith({
      data: mockData,
      message: Constants.OK.MESSAGE,
      statusCode: Constants.OK.CODE,
    })
  })

  it('Should response error', async () => {
    // Mock service with promise reject
    const mockUserService = {
      findUsers: jest.fn(async () => Promise.reject()),
    }

    const userController = new UserController(mockUserService as any)

    const mockRequest = {
      query: {},
    }

    const mockResponse = {
      response: jest.fn(),
    }

    try {
      await userController.getUsers(mockRequest as any, mockResponse as any)
    } catch (error) {
      expect(error).toEqual(new Error('UserController.getUsers'))
    }
  })
})
