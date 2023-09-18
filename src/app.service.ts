import { Injectable } from '@nestjs/common';
import { formatStorageNumberToObj } from '@/utils';
import { Zstack } from '@/types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getStorageNumberToObj(data: Zstack.Input): Zstack.IStorage {
    return formatStorageNumberToObj(data);
  }
}
