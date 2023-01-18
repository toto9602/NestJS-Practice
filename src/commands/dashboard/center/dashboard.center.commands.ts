import { Command, CommandRunner } from 'nest-commander';
import { Logger } from '@nestjs/common';

@Command({
  name: 'dashboard:center',
  arguments: '<network>',
})
export class CenterDashboardCommand extends CommandRunner {
  private readonly logger: Logger;
  constructor() {
    super();
    this.logger = new Logger();
  }

  async run(args: string[]): Promise<void> {
    console.log(args);
  }
}
