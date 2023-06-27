import { User } from './User'

describe('Create a new User', () => {
  it('should be able to create a new instance of user', () => {
    const user = User.createUser({
      name: 'Jonh Due',
      cpf: '111.222.333-44',
      whatsapp: '5555999999999',
    })

    expect(user instanceof User).toBe(true)
    expect(user).toBeTruthy()
  })
})
