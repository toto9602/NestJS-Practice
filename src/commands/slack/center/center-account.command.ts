import { Command, CommandRunner } from 'nest-commander';
import { validateAndGetNetworkArg } from 'src/common/helper/arg-helpers/network-arg.helper';

@Command({
  name: 'slack:center:accounts',
})
export class CenterAccountCommand extends CommandRunner {
  async run(args: string[]): Promise<void> {
    const network = validateAndGetNetworkArg(args);
    console.log(`Running Center Account command with...${network}`);
  }
}
