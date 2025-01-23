import express from 'express'
import { AuthRoutes } from '../modules/auth/auth.route'
import { UserRoutes } from '../modules/users/user.route'
const routers = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes
  },
  {
    path: '/user',
    route: UserRoutes
  }
]

moduleRoutes.forEach(route => {
  routers.use(route.path, route.route)
})

export default routers
