import { AppError } from '@shared/error/AppError'
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory'
import { User } from '@modules/accounts/domain/User'
import { ListUserByCPF } from './ListUserByCPF'

let usersRepositoryInMemory: UsersRepositoryInMemory
let listUserByCPF: ListUserByCPF

describe('List user by CPF', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    listUserByCPF = new ListUserByCPF(usersRepositoryInMemory)
  })

  it('should be able to list a user by CPF when it exists', async () => {
    const user = User.createUser({
      name: 'Jonh Due',
      cpf: '111.222.333-44',
      whatsapp: '5555999999999',
    })

    usersRepositoryInMemory.create(user)

    const userCreated = await listUserByCPF.execute({ cpf: user.cpf })

    expect(userCreated).toBeDefined()
  })

  it('should not be able to list a user when it does not exist', async () => {
    await expect(
      listUserByCPF.execute({ cpf: 'non-exists' }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
