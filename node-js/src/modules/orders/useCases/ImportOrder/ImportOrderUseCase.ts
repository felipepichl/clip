import { parse } from 'csv-parse';
import fs from 'fs';

interface IRequest {
  file: Express.Multer.File;
}

interface IImportOrder {
  product: string;
  valor: string;
}

class ImportOrderUseCase {
  // loadProduct({ file }: IRequest): Promise<IImportOrder[]>{

  // };

  execute({ file }: IRequest): void {
    const steam = fs.createReadStream(file.path);

    const parseFile = parse();

    steam.pipe(parseFile);

    parseFile.on('data', (line) => {
      console.log(line);
    });
  }
}

export { ImportOrderUseCase };
