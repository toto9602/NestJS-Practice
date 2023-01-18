import { Command, CommandRunner } from 'nest-commander';
import { CenterDashboardCommand } from 'src/commands/dashboard/center/dashboard.center.commands';

@Command({
  name: 'slack:price',
  arguments: '<token>',
})
export class PriceCommand extends CommandRunner {
  async run(args: string[]) {
    console.log(args);
  }
}
