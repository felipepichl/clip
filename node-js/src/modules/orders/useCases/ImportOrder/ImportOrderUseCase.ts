interface IRequest {
  file: any;
}

class ImportOrderUseCase {
  execute({ file }: IRequest): void {
    console.log(file);
  }
}

export { ImportOrderUseCase };
