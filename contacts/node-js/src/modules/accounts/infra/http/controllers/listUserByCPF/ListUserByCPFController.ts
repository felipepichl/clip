import { ListUserByCPF } from '@modules/accounts/useCases/listUserByCPF/ListUserByCPF'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

class ListUserByCPFController {
  async handle(request: Request, response: Response) {
    const { cpf } = request.params

    const listUserByCPF = container.resolve(ListUserByCPF)

    const user = await listUserByCPF.execute({ cpf })

    return response.json(user)
  }
}

export { ListUserByCPFController }
