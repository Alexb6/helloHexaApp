import { Hello } from '../../../domain/hello/hello.entity';

// Runtime identifier used by NestJS’s dependency injection container to bind and resolve
// the interface-based outbound port below, since interfaces do not exist at runtime
export const helloOutbound = 'helloOutbound';

export interface HelloOutboundPort {
  read(): Promise<Hello>;
}

/* Alternatively, we can use an abstract class as a port because
it exists at runtime and can therefore serve directly as a NestJS provider token.

export abstract class HelloOutboundPort {
  abstract read(): Promise<Hello>;
}
*/
