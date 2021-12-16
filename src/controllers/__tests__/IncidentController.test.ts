import IncidentController from '../IncidentController'
import Constants from '../../constants/Constant'

describe('Incident Controller - getIncidents', () => {
  const mockData = [
    {
      title: 'test 1',
      description: 'description 1',
      status: 'stat 1',
      priorityIndex: 1,
      assignee: { _id: '61b5b832643f28575d569eb3' },
      reportedBy: { _id: '61b5b832643f28575d569ec3' },
      createdAt: '2021-01-01 00:00:00',
      updatedAt: '2021-01-01 00:00:00',
    },
  ]

  it('Should response list of incident', async () => {
    // Mock service with mock data
    const mockIncidentService = {
      findIncidents: jest.fn(async () => mockData),
    }

    const incidentController = new IncidentController(
      mockIncidentService as any
    )

    const mockRequest = {
      query: {},
    }

    const mockResponse = {
      json: jest.fn(),
    }

    await incidentController.getIncidents(
      mockRequest as any,
      mockResponse as any
    )

    expect(mockResponse.json).toBeCalledWith({
      data: mockData,
      message: Constants.OK.MESSAGE,
      statusCode: Constants.OK.CODE,
    })
  })

  it('Should response error', async () => {
    // Mock service with promise reject
    const mockIncidentService = {
      findIncidents: jest.fn(async () => Promise.reject()),
    }

    const incidentController = new IncidentController(
      mockIncidentService as any
    )

    const mockRequest = {
      query: {},
    }

    const mockResponse = {
      response: jest.fn(),
    }

    try {
      await incidentController.getIncidents(
        mockRequest as any,
        mockResponse as any
      )
    } catch (error) {
      expect(error).toEqual(new Error('IncidentController.getIncidents'))
    }
  })
})

describe('Incident Controller - storeIncident', () => {
  it('Should storeIncident with success', async () => {
    // Mock service with mock data
    const mockIncidentService = {
      saveIncident: jest.fn(),
    }

    const incidentController = new IncidentController(
      mockIncidentService as any
    )

    const mockRequest = {
      body: {
        title: 'test 1',
        description: 'description 1',
        status: 'stat 1',
        priorityIndex: 1,
        assignee: { _id: '61b5b832643f28575d569eb3' },
        reportedBy: { _id: '61b5b832643f28575d569ec3' },
        createdAt: '2021-01-01 00:00:00',
        updatedAt: '2021-01-01 00:00:00',
      },
    }

    const mockResponse = {
      json: jest.fn(),
    }

    await incidentController.storeIncident(
      mockRequest as any,
      mockResponse as any
    )

    expect(mockResponse.json).toBeCalledWith({
      data: {},
      message: Constants.OK.MESSAGE,
      statusCode: Constants.OK.CODE,
    })
  })

  it('Should response error', async () => {
    // Mock service with promise reject
    const mockIncidentService = {
      saveIncident: jest.fn(async () => Promise.reject()),
    }

    const incidentController = new IncidentController(
      mockIncidentService as any
    )

    const mockRequest = {
      body: {
        title: 'test 1',
        description: 'description 1',
        status: 'stat 1',
        priorityIndex: 1,
        assignee: { _id: '61b5b832643f28575d569eb3' },
        reportedBy: { _id: '61b5b832643f28575d569ec3' },
        createdAt: '2021-01-01 00:00:00',
        updatedAt: '2021-01-01 00:00:00',
      },
    }

    const mockResponse = {
      response: jest.fn(),
    }

    try {
      await incidentController.storeIncident(
        mockRequest as any,
        mockResponse as any
      )
    } catch (error) {
      expect(error).toEqual(new Error('IncidentController.storeIncident'))
    }
  })
})

describe('Incident Controller - deleteIncident', () => {
  it('Should deleteIncident with success', async () => {
    // Mock service with mock data
    const mockIncidentService = {
      removeIncident: jest.fn(),
    }

    const incidentController = new IncidentController(
      mockIncidentService as any
    )

    const mockRequest = {
      params: {
        _id: '61b5b832643f28575d569eb3',
      },
    }

    const mockResponse = {
      json: jest.fn(),
    }

    await incidentController.deleteIncident(
      mockRequest as any,
      mockResponse as any
    )

    expect(mockResponse.json).toBeCalledWith({
      data: {},
      message: Constants.NO_CONTENT.MESSAGE,
      statusCode: Constants.NO_CONTENT.CODE,
    })
  })

  it('Should response error', async () => {
    // Mock service with promise reject
    const mockIncidentService = {
      removeIncident: jest.fn(async () => Promise.reject()),
    }

    const incidentController = new IncidentController(
      mockIncidentService as any
    )

    const mockRequest = {
      params: {
        _id: '61b5b832643f28575d569eb3',
      },
    }

    const mockResponse = {
      response: jest.fn(),
    }

    try {
      await incidentController.deleteIncident(
        mockRequest as any,
        mockResponse as any
      )
    } catch (error) {
      expect(error).toEqual(new Error('IncidentController.deleteIncident'))
    }
  })
})

describe('Incident Controller - updateIncidentStatus', () => {
  it('Should updateIncidentStatus with success', async () => {
    // Mock service with mock data
    const mockIncidentService = {
      updateIncidentStatus: jest.fn(),
    }

    const incidentController = new IncidentController(
      mockIncidentService as any
    )

    const mockRequest = {
      body: {
        _id: '61b5b832643f28575d569eb3',
        newStatus: 'In Progress',
      },
    }

    const mockResponse = {
      json: jest.fn(),
    }

    await incidentController.updateIncidentStatus(
      mockRequest as any,
      mockResponse as any
    )

    expect(mockResponse.json).toBeCalledWith({
      data: {},
      message: Constants.OK.MESSAGE,
      statusCode: Constants.OK.CODE,
    })
  })

  it('Should response error', async () => {
    // Mock service with promise reject
    const mockIncidentService = {
      updateIncidentStatus: jest.fn(async () => Promise.reject()),
    }

    const incidentController = new IncidentController(
      mockIncidentService as any
    )

    const mockRequest = {
      body: {
        _id: '61b5b832643f28575d569eb3',
        newStatus: 'In Progress',
      },
    }

    const mockResponse = {
      response: jest.fn(),
    }

    try {
      await incidentController.updateIncidentStatus(
        mockRequest as any,
        mockResponse as any
      )
    } catch (error) {
      expect(error).toEqual(
        new Error('IncidentController.updateIncidentStatus')
      )
    }
  })
})
