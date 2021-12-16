import { IIncident } from '../types/IncidentType'
import { model, Schema } from 'mongoose'

const incidentSchema: Schema = new Schema<IIncident>(
  {
    title: String,
    description: String,
    status: String,
    priorityIndex: Number,
    priorityLabel: String,
    assignee: { type: Schema.Types.ObjectId, ref: 'User' },
    reportedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    active: Number,
  },
  { collection: 'incident', timestamps: true }
)

export default model<IIncident>('Incident', incidentSchema)
