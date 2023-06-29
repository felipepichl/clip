import request from 'supertest'
import { app } from '@shared/infra/http/start/app'

describe('[E2E] - List user by CPF', () => {
  it('should be able to retrieve user information by CPF', async () => {
    await request(app).post('/users').send({
      name: 'John Due',
      cpf: '111.222.333-44',
      whatsapp: '5555999999999',
    })

    const response = await request(app).get('/users/111.222.333-44')

    expect(response.status).toBe(200)
    expect(response.body.user.props.name).toBe('John Due')
  })
})
