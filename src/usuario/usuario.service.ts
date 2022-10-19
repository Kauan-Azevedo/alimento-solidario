import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario, UsuarioDocument } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>
  ) { }

  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = new this.usuarioModel(createUsuarioDto);
    return usuario.save();
  }

  findAll() {
    return this.usuarioModel.find();
  }

  findOne(id: string) {
    return this.usuarioModel.findById(id)
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateUsuarioDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.usuarioModel.deleteOne({
      _id: id,
    },
    );
  }
}
