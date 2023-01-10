import { Controller, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './cats.dto';
import { CatsService } from './cats.service';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
@Controller('cats')
@ApiTags('Cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @ApiOperation({ summary: 'Saving a new cat info' })
  @ApiCreatedResponse({ description: 'Returns the info of the cat' })
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
}
