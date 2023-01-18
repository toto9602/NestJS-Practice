import { BadRequestException } from '@nestjs/common';
import { Network } from '../../../common/consts/network';

export function validateAndGetNetworkArg(args: string[]) {
  if (args.length > 2) throw new BadRequestException('Too many args');

  const network = args[0];

  if (network !== Network.Ethereum && network !== Network.Klaytn) {
    throw new BadRequestException('Invalid Network');
  }

  return network as Network;
}
