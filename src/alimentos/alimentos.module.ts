import { Module } from '@nestjs/common';
import { AlimentosService } from './alimentos.service';
import { AlimentosController } from './alimentos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Alimento, AlimentoSchema } from './entities/alimento.entity';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Alimento.name, schema: AlimentoSchema }]),
  ],
  controllers: [AlimentosController],
  providers: [AlimentosService]
})
export class AlimentosModule { }
