import { Module } from '@nestjs/common';
import { CenterAccountCommand } from './center-account.command';
import { CenterPageCommand } from './center-page.command';

@Module({
  providers: [CenterAccountCommand, CenterPageCommand],
})
export class CenterCommandModule {}
