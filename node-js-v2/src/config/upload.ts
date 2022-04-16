import multer from 'multer';
import { resolve } from 'path';

const tempFolder = resolve(__dirname, '..', 'tmp');

export default {
  storage: multer.diskStorage({
    destination: tempFolder,
  }),
};
