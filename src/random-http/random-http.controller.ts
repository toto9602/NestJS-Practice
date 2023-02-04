import { Controller, UseInterceptors } from '@nestjs/common';
import { HttpInterceptor } from 'src/common/interceptors/http.interceptor';
import { RandomHttpService } from './random-http.service';

@Controller()
@UseInterceptors(HttpInterceptor)
export class RandomHttpController {
  constructor(private randomHttpService: RandomHttpService) {}

  async getRandomName() {
    return await this.randomHttpService.getRandomName();
  }
}
