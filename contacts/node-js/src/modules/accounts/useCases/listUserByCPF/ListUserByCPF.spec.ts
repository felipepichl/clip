import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory'
import { LisUserByCPF } from './LisUserByCPF'
import { User } from '@modules/accounts/domain/User'

let usersRepositoryInMemory: UsersRepositoryInMemory
let listUserByCPF: LisUserByCPF

deacribe('List user by CPF', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    listUserByCPF = new LisUserByCPF()
  })

  it('should be able to list an user by CPF', async () => {
    const user = User.createUser({
      name: 'Jonh Due',
      cpf: '111.222.333-44',
      whatsapp: '5555999999999',
    })

    usersRepositoryInMemory.create(user)

    const userCreated = await listUserByCPF.execute({ cpf })

    expect(userCreated).toBeDefined()
    expect(userCreated?.name).toEqual(user.name)
    expect(userCreated?.cpf).toEqual(user.cpf)
    expect(userCreated?.whatsapp).toEqual(user.whatsapp)
  })
})
