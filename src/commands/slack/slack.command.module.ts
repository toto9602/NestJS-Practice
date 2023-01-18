import { Module } from '@nestjs/common';
import { CapsuleCommandModule } from './capsule/capsule.command.module';
import { CenterCommandModule } from './center/center.command.module';
import { ReportPriceCommandModule } from './price/report-price.command.module';

@Module({
  imports: [
    CapsuleCommandModule,
    CenterCommandModule,
    ReportPriceCommandModule,
  ],
})
export class SlackCommandModule {}
