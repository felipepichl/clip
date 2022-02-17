import { parse } from 'csv-parse';
import fs from 'fs';
import readline from 'readline';

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

    const rl = readline.createInterface({
      input: fs.createReadStream(file.path),
    });

    rl.on('line', (line) => {
      console.log(line);
    });
  }
}

export { ImportOrderUseCase };
