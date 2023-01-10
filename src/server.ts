import express from 'express'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'
import { UserController } from './modules/user/user.controller'

const app = express()
app.use(express.json())
const port = process.env.PORT || 3000

app.post('/users', async (request, response) => {
  await new UserController().create(request, response)
})

app.get('/users', async (request, response) => {
  await new UserController().find(request, response)
})

app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.listen(3000, () => console.log(`Server is  running on port ${port}`))
