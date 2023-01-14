import { Module } from '@nestjs/common';
import { CenterDashboardCommandModule } from './center/dashboard.center.command.module';

// dashboard:center:ethereum
// dashboard:center:klaytn
@Module({
  imports: [CenterDashboardCommandModule],
})
export class DashboardCommandModule {}
