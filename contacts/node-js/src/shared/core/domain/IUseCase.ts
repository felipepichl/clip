interface IUseCase<IRequest, IResponse> {
  execute(request: IRequest, response: IResponse): Promise<IResponse | IRequest>
}

export { IUseCase }
