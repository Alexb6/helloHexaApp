import { Module } from '@nestjs/common';
import { HelloModule } from './hello.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HelloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
