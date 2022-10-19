import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlimentosModule } from './alimentos/alimentos.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://admin:rLQ0T7JtuU5xuUwy@alimentos.dz14isf.mongodb.net/test"),
    AlimentosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
