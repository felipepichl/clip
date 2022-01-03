import { ImportOrderController } from './ImportOrderController';
import { ImportOrderUseCase } from './ImportOrderUseCase';

const importOrderUseCase = new ImportOrderUseCase();

const importOrderController = new ImportOrderController(importOrderUseCase);

export { importOrderController };
