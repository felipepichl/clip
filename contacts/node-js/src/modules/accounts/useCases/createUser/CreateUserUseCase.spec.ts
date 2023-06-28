import { User } from '@modules/accounts/domain/User'
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory'

import { AppError } from '@shared/error/AppError'

import { CreateUserUseCase } from './CreateUserUseCase'

let usersRepositoryInMemory: UsersRepositoryInMemory
let createUserUseCase: CreateUserUseCase

describe('Create a user', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
  })

  it('should be able to create a new user', async () => {
    const user = User.createUser({
      name: 'Jonh Due',
      cpf: '111.222.333-44',
      whatsapp: '5555999999999',
    })

    await createUserUseCase.execute(user)

    const { cpf } = user

    const userCreated = await usersRepositoryInMemory.findByCPF(cpf)

    expect(userCreated).toBeDefined()
    expect(userCreated?.name).toEqual(user.name)
    expect(userCreated?.cpf).toEqual(user.cpf)
    expect(userCreated?.whatsapp).toEqual(user.whatsapp)
  })

  it('should not be able to create a new user with the same CPF', async () => {
    const user = User.createUser({
      name: 'Jonh Due',
      cpf: '111.222.333-44',
      whatsapp: '5555999999999',
    })

    await createUserUseCase.execute(user)

    await expect(createUserUseCase.execute(user)).rejects.toBeInstanceOf(
      AppError,
    )
  })

  it('should not be able to create a new user without providing the CPF', async () => {
    const user = User.createUser({
      name: 'John Due',
      whatsapp: '5555999999999',
      cpf: '',
    })

    await expect(createUserUseCase.execute(user)).rejects.toBeInstanceOf(
      AppError,
    )
  })
})
