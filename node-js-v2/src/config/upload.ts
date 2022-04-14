import multer from 'multer';
import { resolve } from 'path';

const tempFolder = resolve(__dirname, '..', 'temp');

export default {
  storage: multer.diskStorage({
    destination: tempFolder,
  }),
};
