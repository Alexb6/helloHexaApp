import { Controller, Get } from '@nestjs/common';
import { ReadHelloUseCase } from '../../application/hello/usecases/read.usecase';

@Controller('hello')
export class HelloController {
  constructor(private readonly readHelloUseCase: ReadHelloUseCase) {}

  @Get()
  async getHello() {
    try {
      const hello = await this.readHelloUseCase.execute();
      return hello.message;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
