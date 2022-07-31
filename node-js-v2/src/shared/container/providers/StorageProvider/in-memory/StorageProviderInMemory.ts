import { IStorageProvider } from '../models/IStorageProvider';

class StorageProviderInMemory implements IStorageProvider {
  private storage: string[] = [];

  async saveFile(file: string, folder: string): Promise<string> {
    const path = `${folder}/${file}`;

    this.storage.push(path);

    return path;
  }
  async deleteFile(file: string, folder: string): Promise<void> {
    const findIndex = this.storage.findIndex(
      path => path === `${folder}/${file}`,
    );

    this.storage.splice(findIndex, 1);
  }
}

export { StorageProviderInMemory };
