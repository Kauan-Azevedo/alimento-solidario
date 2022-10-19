import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlimentosModule } from './alimentos/alimentos.module';

@Module({
  imports: [AlimentosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
