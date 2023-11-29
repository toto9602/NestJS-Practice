import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'slack:center:page',
})
export class CenterPageCommand extends CommandRunner {
  async run(): Promise<void> {
    console.log(`Running Center Page command with...`);
  }
}
