import { Request, Response } from 'express'
import { get } from 'lodash'

import Constant from '../constants/Constant'
import IncidentService from '../services/IncidentService'
import { responseSuccess } from '../utils/response'

import { IIncident } from '../types/IncidentType'

interface IIncidentController {
  getIncidents(req: Request, res: Response): Promise<void>
  storeIncident(req: Request, res: Response): Promise<void>
  deleteIncident(req: Request, res: Response): Promise<void>
  updateIncidentStatus(req: Request, res: Response): Promise<void>
}

// Controller handle request and response.
class IncidentController implements IIncidentController {
  constructor(private incidentService: IncidentService) {}

  async getIncidents(req: Request, res: Response): Promise<void> {
    try {
      const { status } = req.query as Pick<IIncident, 'status'>
      const response: IIncident[] = await this.incidentService.findIncidents(status)
      res.json(responseSuccess(Constant.OK.CODE, Constant.OK.MESSAGE, response))
      return
    } catch (err) {
      throw new Error(get(err, 'message', 'IncidentController.getIncidents'))
    }
  }

  async storeIncident(req: Request, res: Response): Promise<void> {
    try {
      const { title, description, priorityIndex, assignee, reportedBy } = req.body as IIncident
      await this.incidentService.saveIncident(
        title,
        description,
        priorityIndex,
        assignee,
        reportedBy
      )
      res.json(responseSuccess(Constant.OK.CODE, Constant.OK.MESSAGE, {}))
      return
    } catch (err) {
      throw new Error(get(err, 'message', 'IncidentController.storeIncident'))
    }
  }

  async deleteIncident(req: Request, res: Response): Promise<void> {
    try {
      const { _id } = req.params as Pick<IIncident, '_id'>
      await this.incidentService.removeIncident(_id)
      res.json(
        responseSuccess(
          Constant.NO_CONTENT.CODE,
          Constant.NO_CONTENT.MESSAGE,
          {}
        )
      )
    } catch (err) {
      throw new Error(get(err, 'message', 'IncidentController.deleteIncident'))
    }
  }

  async updateIncidentStatus(req: Request, res: Response): Promise<void> {
    try {
      const { _id, newStatus } = req.body as Pick<IIncident, '_id' | 'newStatus'>
      await this.incidentService.updateIncidentStatus(_id, newStatus)
      res.json(responseSuccess(Constant.OK.CODE, Constant.OK.MESSAGE, {}))
      return
    } catch (err) {
      throw new Error(
        get(err, 'message', 'IncidentController.updateIncidentStatus')
      )
    }
  }
}

export default IncidentController
