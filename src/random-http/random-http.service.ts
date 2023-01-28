import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RandomHttpService {
  constructor(private nestHttp: HttpService) {}

  async getRandomName() {
    const name$ = this.nestHttp.get('/random_name');
    return await firstValueFrom(name$);
  }
}
