import dayjs from 'dayjs';

import { IDateProvider } from '../model/IDateProvider';

class DayjsDateProvider implements IDateProvider {
  addHours(hours: number): Date {
    return dayjs().add(hours, 'hours').toDate();
  }
}

export { DayjsDateProvider };
