interface IUseCase<IRequest, IResponse> {
  execute(request?: IRequest): Promise<IResponse | IRequest>
}

export { IUseCase }
