import { Module } from '@nestjs/common';
import { CapsuleAccountsCommand } from './capsule-account.command';
import { CapsulePageCommand } from './capsule-page.command';

@Module({
  providers: [CapsuleAccountsCommand, CapsulePageCommand],
})
export class CapsuleCommandModule {}
