import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServidoresModule } from './servidores/servidores.module';

@Module({
  imports: [ServidoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
