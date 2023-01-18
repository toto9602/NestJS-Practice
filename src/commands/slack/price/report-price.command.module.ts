import { Module } from '@nestjs/common';
import { PriceCommand } from './report-price.command';

@Module({
  providers: [PriceCommand],
})
export class ReportPriceCommandModule {}
