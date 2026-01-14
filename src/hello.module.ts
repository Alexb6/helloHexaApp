import { Module } from '@nestjs/common';
import { HelloController } from './presentation/hello/hello.controller';
import { ReadHelloUseCase } from './application/hello/usecases/read.usecase';
import { FileHelloRepository } from './infrastructure/hello/hello.repository';
import { helloOutbound } from './application/hello/ports/hello.outbound.port';

/*
This module acts as the composition root for the Hello context, declaring all controllers,
use cases, and the bindings between ports and their concrete implementations.
*/
@Module({
  controllers: [HelloController],
  providers: [
    ReadHelloUseCase,
    {
      provide: helloOutbound,
      useClass: FileHelloRepository,
    },
  ],
})
export class HelloModule {}
