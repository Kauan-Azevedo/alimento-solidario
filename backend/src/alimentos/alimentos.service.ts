import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAlimentoDto } from './dto/create-alimento.dto';
import { UpdateAlimentoDto } from './dto/update-alimento.dto';
import { Alimento, AlimentoDocument } from './entities/alimento.entity';

@Injectable()
export class AlimentosService {

  constructor(
    @InjectModel(Alimento.name) private alimentoModel: Model<AlimentoDocument>
  ) { }

  create(createAlimentoDto: CreateAlimentoDto) {
    const alimento = new this.alimentoModel(createAlimentoDto);
    return alimento.save();
  }

  findAll() {
    return this.alimentoModel.find();
  }

  findOne(id: string) {
    return this.alimentoModel.findById(id);
  }

  update(id: string, updateAlimentoDto: UpdateAlimentoDto) {
    return this.alimentoModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateAlimentoDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.alimentoModel.deleteOne({
      _id: id,
    },);
  }
}
