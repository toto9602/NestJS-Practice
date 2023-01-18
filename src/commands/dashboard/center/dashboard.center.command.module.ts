import { Module } from '@nestjs/common';
import { CenterDashboardCommand } from './dashboard.center.commands';

@Module({
  providers: [CenterDashboardCommand],
})
export class CenterDashboardCommandModule {}
