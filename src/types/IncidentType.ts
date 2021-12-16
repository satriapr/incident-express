export interface IIncident {
  _id: string
  title: string
  description: string
  status: string
  newStatus: string
  priorityIndex: number
  priorityLabel: string
  assignee: object
  reportedBy: object
  active: number
}
