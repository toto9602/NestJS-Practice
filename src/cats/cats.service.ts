import { Inject, Injectable } from '@nestjs/common';
import { CATS_REPOSITORY_TOKEN } from 'src/common/di-tokens/db.di-token';
import { Repository } from 'typeorm';
import { CreateCatDto } from './cats.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @Inject(CATS_REPOSITORY_TOKEN)
    private readonly catsRepository: Repository<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    const cat = this.catsRepository.create(createCatDto);
    return this.catsRepository.save(cat);
  }
}
