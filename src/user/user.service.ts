import { Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) { }

  async create(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      senha: await bcrypt.hash(createUserDto.senha, 15)
    }
    const saveUser = new this.userModel(user)
    return saveUser.save();
  }

  findByEmail(@Param() email: string) {
    return this.userModel.findOne(
      {
        email
      }
    )
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
