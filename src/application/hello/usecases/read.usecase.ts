import { Injectable, Inject } from '@nestjs/common';
import {
  helloOutbound,
  type HelloOutboundPort,
} from '../ports/hello.outbound.port';
import { Hello } from '../../../domain/hello/hello.entity';

@Injectable()
export class ReadHelloUseCase {
  constructor(
    @Inject(helloOutbound)
    private readonly helloOutboundPort: HelloOutboundPort,
  ) {}

  async execute(): Promise<Hello> {
    return this.helloOutboundPort.read();
  }
}
