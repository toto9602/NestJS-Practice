import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'slack:capsule:accounts',
})
export class CapsuleAccountsCommand extends CommandRunner {
  async run(): Promise<void> {
    console.log('Running Capsule Account command...');
  }
}
