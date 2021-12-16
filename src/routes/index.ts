import { Router } from 'express'
import IncidentController from '../controllers/IncidentController'
import IncidentService from '../services/IncidentService'
import UserController from '../controllers/UserController'
import UserService from '../services/UserService'

const routes: Router = Router()

// incident route
const incidentController = new IncidentController(new IncidentService())
routes.get(`/incidents`, (req, res) =>
  incidentController.getIncidents(req, res)
)
routes.post(`/incident`, (req, res) =>
  incidentController.storeIncident(req, res)
)
routes.put(`/incident-status`, (req, res) =>
  incidentController.updateIncidentStatus(req, res)
)
routes.delete(`/incident/:_id`, (req, res) =>
  incidentController.deleteIncident(req, res)
)

// user route
const userController = new UserController(new UserService())
routes.get(`/users`, (req, res) =>
  userController.getUsers(req, res)
)

export default routes
