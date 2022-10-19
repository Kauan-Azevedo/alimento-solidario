import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlimentosModule } from './alimentos/alimentos.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AlimentosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
