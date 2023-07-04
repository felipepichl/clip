import { ListUserByCPF } from '@modules/accounts/useCases/listUserByCPF/ListUserByCPF'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

class ListUserByCPFController {
  async handle(request: Request, response: Response) {
    const { cpf } = request.params

    const cpfFormatted = cpf.replace('/[.-]/g', '')

    console.log('====================================')
    console.log(cpfFormatted)
    console.log('====================================')

    const listUserByCPF = container.resolve(ListUserByCPF)

    const user = await listUserByCPF.execute({ cpf: cpfFormatted })

    return response.json(user)
  }
}

export { ListUserByCPFController }
