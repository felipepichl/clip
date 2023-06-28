import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory'
import { ListUserByCPF } from './ListUserByCPF'
import { User } from '@modules/accounts/domain/User'
import { AppError } from '@shared/error/AppError'

let usersRepositoryInMemory: UsersRepositoryInMemory
let listUserByCPF: ListUserByCPF

describe('List user by CPF', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    listUserByCPF = new ListUserByCPF(usersRepositoryInMemory)
  })

  it('should be able to list an user by CPF', async () => {
    const user = User.createUser({
      name: 'Jonh Due',
      cpf: '111.222.333-44',
      whatsapp: '5555999999999',
    })

    usersRepositoryInMemory.create(user)

    const userCreated = await listUserByCPF.execute({ cpf: user.cpf })

    expect(userCreated).toBeDefined()
  })

  it('should not be able to list an user then non exists', async () => {
    await expect(
      listUserByCPF.execute({ cpf: 'non-exists' }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
