import { IIncident } from '../types/IncidentType'
import IncidentModel from '../models/IncidentModel'

import Constant from '../constants/Constant'
import UserModel from '../models/UserModel'

interface IIncidentService {
  findIncidents(status: string): Promise<IIncident[]>
  saveIncident(
    title: string,
    description: string,
    priorityIndex: number,
    assignee: object,
    reportedBy: object
  ): Promise<void>
  removeIncident(_id: string): Promise<void>
  updateIncidentStatus(_id: string, status: string): Promise<void>
}

// Query and business logic
class IncidentService implements IIncidentService {
  // Find active record
  async findIncidents(status: string): Promise<IIncident[]> {
    const response = await IncidentModel.find({
      active: 1,
      ...(status ? { status } : {}), // if empty, don't include
    })
      .sort({ createdAt: -1 })
      .populate('assignee', 'fullName role', UserModel)
      .populate('reportedBy', 'fullName role', UserModel)
    return response
  }

  // Create new record
  async saveIncident(
    title: string,
    description: string,
    priorityIndex: number,
    assignee: object,
    reportedBy: object
  ) {
    const newIncidentModel = new IncidentModel({
      title,
      description,
      status: Constant.STATUS.OPEN,
      priorityIndex,
      priorityLabel: Constant.PRIORITY_LABEL[priorityIndex],
      assignee,
      reportedBy,
      active: 1,
    })

    await newIncidentModel.save()
  }

  // Update incident status
  async updateIncidentStatus(_id: string, status: string) {
    await IncidentModel.findByIdAndUpdate(_id, { status })
  }

  // Soft delete
  async removeIncident(_id: string) {
    await IncidentModel.findByIdAndUpdate(_id, { active: 0 })
  }
}

export default IncidentService
