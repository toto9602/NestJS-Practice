import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'slack:capsule:page',
})
export class CapsulePageCommand extends CommandRunner {
  async run(): Promise<void> {
    console.log('Running Capsule Page command...');
  }
}
